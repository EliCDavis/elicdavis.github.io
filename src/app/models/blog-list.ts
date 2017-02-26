import { BlogPreview } from './blog-preview';

export class BlogList {

    constructor(private blogList: BlogPreview[]){ }

    public getBlogPreviews(): BlogPreview[] {
        return this.blogList;
    }

}
