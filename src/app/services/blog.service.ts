// Angular 2
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Rx
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';

// Other services
import { NPCService } from './npc.service';

// User defined models
import { Blog, BlogPreview, Dialogue } from '../models';

@Injectable()
export class BlogService {

    constructor(private http: Http, private npcService: NPCService) { }

    getBlogs(): Observable<BlogPreview[]> {

        this.checkRequestsLeft();

        let blogTest = new ReplaySubject<BlogPreview[]>(1);
        blogTest.next([
            new BlogPreview(
                'Recursive Node Placement',
                'img/blog/nodeview.png',
                'An explanation on Node View\'s batch node placement for displaying trees'
            ),
            new BlogPreview(
                'Recursive Node Placement',
                'img/blog/banner.png',
                'An explanation on Node View\'s batch node placement for displaying trees'
            ),
            new BlogPreview(
                'Recursive Node Placement',
                '',
                'An explanation on Node View\'s batch node placement for displaying trees'
            ),
            new BlogPreview(
                'Recursive Node Placement',
                '',
                'An explanation on Node View\'s batch node placement for displaying trees'
            )
        ]);

        return blogTest;

        /*return this.http
            .get('blogs/README.md')
            .map(this.extractData)
            .catch(this.handleError);*/
    }

    getBlog(url: string): Observable<Blog> {

        let blogTest = new ReplaySubject<Blog>(1);

        blogTest.next(new Blog(
            'Node Placement',
            `
            # Overview
            I wanted a better way to display trees.

            # Final Thoughts
            It as gud
            `
        ));

        return blogTest;

    }

    private checkRequestsLeft() {
        this.http.get('https://api.github.com/rate_limit').map(this.extractData).subscribe(data => {
            console.log('checkRequestsLeft: ', data);
            this.npcService.giveDialouge$(
                new Dialogue(
                    'Github Rate Limit',
                    [`
                    You have (${data.rate.remaining}/${data.rate.limit}) requests remaining.
                    This will reset in ${((data.rate.reset - (Date.now()/1000) ) / 60).toFixed(1)} minutes.
                    `],
                    null
                )
            );
        });
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        console.log('HANDLE ERROR');
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
