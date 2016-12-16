import { Component } from '@angular/core';

import { BlogPreview } from '../models/blog-preview';
import { Blog } from '../models/blog';

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
        .blog-item {
            border-style: solid;
            color: green;
            background-color: white;
            border-radius: 3px;
            padding: 10px;
            margin:10px;
        }
    `]
})
export class BlogComponent {

    private blogs: BlogPreview[];

    

}
