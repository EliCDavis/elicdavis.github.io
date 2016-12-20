import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { BlogPreview } from '../models/blog-preview';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
    selector: 'blog',
    template: `
        <h1>Blogs</h1>
        <div class="flex layout-column">
            <div class="layout-row layout-wrap">
                <div class="flex-33" *ngFor="let blog of blogs">
                    <div class="blog-item md-whiteframe-4dp">
                        <h2>{{blog.getTitle()}}</h2>
                        {{blog.getShortDescription()}}<br/>
                        <button style="margin-top:10px">
                            Read
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .archive {
            margin: 20px;
            padding:20px;
        }
        h1{
            margin-left: 10px;
            margin-bottom: 0px;
        }
        .blog-item {
            border-style: solid;
            color: green;
            background-color: white;
            border-radius: 3px;
            padding: 10px;
            margin:10px;
        }
    `],
    providers: [ BlogService ]
})
export class BlogComponent implements OnInit {

    private blogs: BlogPreview[];

    constructor(private blogService: BlogService){}

    ngOnInit(): void{
        this.blogService.getBlogs().subscribe((data) => {
            this.blogs = data;
        });
    }

}
