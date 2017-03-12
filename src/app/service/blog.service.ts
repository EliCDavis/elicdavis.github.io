import * as https from 'https';
// Angular
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// rx
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

// Blog Object Definitions
import { BlogList, BlogPreview } from '../models';

@Injectable()
export class BlogService {

  private blogs$: ReplaySubject<BlogList>;

  constructor(private http: Http) {
    this.blogs$ = new ReplaySubject<BlogList>();
    this.loadList()
      .subscribe(this.blogs$);
  }

  public getBlog$(): ReplaySubject<BlogList> {
    return this.blogs$
  }

  public getBlog(id: string): Observable<any> {
    return this.http
      .get('assets/blog/'+id+".md")
      .map(response => {
        return response["_body"];
      });
  }

  private loadList(): Observable<BlogList> {
    return this.http
      .get('assets/blog/README.md')
      .map((response) => {

        let previewList: BlogPreview[] = [];

        let currentPreview: BlogPreview = new BlogPreview();

        response["_body"]
          .split(/\r?\n/)
          .filter(line => {
            return line !== "";
          })
          .forEach(line => {

            let curTitle: number = line.indexOf("# ");
            let contents: string = line.split("# ")[1];
            switch (curTitle) {

              case 0:
                currentPreview.name = contents;
                break;

              case 1:
                currentPreview.datePublished = new Date(contents);
                break;

              case 2:
                currentPreview.summary = contents;
                break;

              case 3:
                currentPreview.dialogue = contents;
                break;

              case 4:
                currentPreview.link = contents;
                previewList.push(currentPreview);
                currentPreview = new BlogPreview();
                break;

            }

          });

        return new BlogList(previewList);
      });
  }

}
