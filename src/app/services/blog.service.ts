import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';

import { Blog } from '../models/blog';
import { BlogPreview } from '../models/blog-preview';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getBlogs(): Observable<BlogPreview[]> {

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

    private extractData(res: Response) {
        return res.json();
    }

    private handleError (error: Response | any) {
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
