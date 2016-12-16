import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { Dialogue } from '../models/dialogue';

const animationImagePaths: string[] = [
    'assets/img/npc/eli animation frame 1.png',
    'assets/img/npc/eli animation frame 2.png',
    'assets/img/npc/eli animation frame 3.png',
    'assets/img/npc/eli animation frame 4.png'
];

let Projects: Dialogue = new Dialogue('Projects', [
    'Side projects are my life.'
], null);

let Languages: Dialogue = new Dialogue('Languages', [
    'Here\'s a list of languages that I know'
], null);

const DialogueTreeRoot: Dialogue = new Dialogue(
    'Welcome',
    [
        `
        Welcome to my site!
        I'm sorry for the lack of content at the moment.  Working on something  nice!
        Check in later please.  
        `,
        `This is the 2nd pane of text`,
        `This is the 3rd pane of text`,
        `So what would you like to know about`
    ],
    [Projects, Languages]
);


const animationImagePathsMouthClosedIndex = 2;

@Component({
    selector: 'npc',
    template: `
        <div class="npc layout-column flex">
            <div class="flex"></div>
            <div  class="dialoug">
                <h3>Eli C Davis</h3>
                <p>
                    {{textToDisplay}}
                </p>
                <div *ngIf="displayOptions != null">
                    <div *ngIf="displayOptions.length > 0">
                        <button *ngFor="let item of displayOptions" (click)="setDialouge(item)">{{item.title}}</button>
                    </div>
                    <div *ngIf="displayOptions.length == 0">
                        <button (click)="nextFrameInDialouge()">Next</button>
                    </div>
                </div>
            </div>
            <img class="npc-person" [src]="currentImage">
        </div>
    `,
    styles: [`
        h1 {
            color: red;
        }

        .npc {
        }

        .npc-person {
            display: inline-block; 
            width:100%;
        }

        .dialoug {
            vertical-align: top;
            margin: 10px;
            border-width: 2px;
            border-style: solid;
            border-radius: 17px;
            padding: 10px;
            background-color:white;
        }

        button {
            background-color: rgb(253, 253, 230);
            border-style: solid;
            padding: 4px;
            border-radius: 8px;
            width: 100%;
            margin: 2px;
        }
    `]
})
export class NPCComponent {

    currentImage: string = animationImagePaths[animationImagePathsMouthClosedIndex];

    dialogue$: Subject<Dialogue>;

    nextTextFrameEvent$: Subject<any>;

    textToDisplay: string;

    displayOptions: any[];

    constructor() {

        const self = this;

        self.displayOptions = null;

        let imgCanvas = document.createElement('canvas');
        let imgContext = imgCanvas.getContext('2d');

        let imagesLoaded$ = new Subject();

        // When all the images are loaded...
        let allImagesLoaded$ = imagesLoaded$.bufferCount(animationImagePaths.length);

        allImagesLoaded$.subscribe((paths) => {
            self.setDialouge(DialogueTreeRoot);
        });

        // Load in all the images and store their base46 encoding...
        animationImagePaths.forEach((path) => {
            let image = new Image();
            image.src = path;
            image.onload = () => {
                imgCanvas.width = image.width;
                imgCanvas.height = image.height;
                imgContext.drawImage(image, 0, 0);
                imagesLoaded$.next(imgCanvas.toDataURL());
            };
        });
        // cavs_vr admin4VR
        self.dialogue$ = new Subject<Dialogue>();
        self.nextTextFrameEvent$ = new Subject<any>();

        self.dialogue$.combineLatest(
            allImagesLoaded$,
            (dialogue: Dialogue, imagePaths: string[]) => {
                return {
                    dialogue: dialogue,
                    imagePaths: imagePaths
                };
            }
        ).subscribe((data) => {

            // Cycle through every text frame
            self.nextTextFrameEvent$.scan((acc, x) => {
                return acc + 1;
            }, -1).scan((previous: Subscription, index: number) => {

                const text = data.dialogue.getText()[index];

                // Keep the last subscription from over writing text that our new one it setting
                if (previous) {
                    previous.unsubscribe();
                }

                self.displayOptions = null;

                // Animate the text and the npc
                return Observable.interval(20)
                    .scan((acc: string, x: number) => {
                        return acc + text[x];
                    }, '')
                    .take(text.length).subscribe((currentText) => {
                        self.textToDisplay = currentText;
                        self.currentImage = data.imagePaths[Math.floor(currentText.length / 4) % data.imagePaths.length];
                    }, (error) => {
                        console.log('Error animating dialogue: ', error);
                    }, () => {
                        // We must use the acutal path to the server image right now since the index to the loaded images
                        // might not match up because images loaded asyncrounously 
                        self.currentImage = animationImagePaths[animationImagePathsMouthClosedIndex];
                        if (data.dialogue.getText().length - 1 === index) {
                            self.displayOptions = data.dialogue.getOptions();
                        } else {
                            self.displayOptions = [];
                        }
                    });

            }, null).take(data.dialogue.getText().length).subscribe(() => {

            }, () => {

            }, () => {

            });

        });

    }

    setDialouge(dialogue: Dialogue) {

        this.dialogue$.next(dialogue);

        // We have to wait a cycle to let subscriptions propegate before 
        // we can auto play the first frame of text
        setTimeout(() => {
            this.nextFrameInDialouge();
        }, 1);

    }

    nextFrameInDialouge() {
        this.nextTextFrameEvent$.next({});
    }

}


