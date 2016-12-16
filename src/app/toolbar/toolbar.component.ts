import { Component } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: `
        <div class="toolbar">
            <button [routerLink]=" ['./'] "> Home </button>        
            <button [routerLink]=" ['./blog'] "> Blog </button>
            <button > Projects </button>
        </div>
    `,
    styles: [`
        .toolbar {
            color: #fff6ef;
            background-color: #595449;
            max-height: 40px;
            min-height: 40px;
            padding: 5px;
        }
        button {
            min-width:80px;
            background-color: #3d6641;
            margin: 5px;
            color: white;
            border-width: 1px;
            border-style: solid;
            border-color: #3a593d;
            padding: 5px;
            border-radius: 2px;
        }
    `]
})
export class ToolbarComponent {

    constructor () {

    }

}
