
/**
 * A list of blog previews will be parsed from something like
 *     blogs/README.md
 * 
 * That will then be used to find locations of other blogs 
 */
export class BlogPreview {

    /**
     * Title of the blog
     */
    private title: string;

    /**
     * Image associated with the blog when listing them.
     */
    private previewImagePath: string;

    /**
     * The base64 encoded version of the image to reference so we no longer have to pull from a server.
     */
    private previewImageRaw: string;

    private shortDescription: string;

    /**
     * The url that links to the actuall blog's contents
     */
    private blogUrl: string;

    constructor(title: string, previewImage: string, shortDescription: string) {
        this.title = title;
        this.previewImagePath = previewImage;
        this.shortDescription = shortDescription;
    }

    getTitle(): string {
        return this.title;
    }

    getPreviewImage(): string {

        if (!this.previewImageRaw) {
            // TODO: Replace with service handeling image conversion to base 64
            this.previewImageRaw = this.previewImagePath;
        }

        return this.previewImageRaw;
    }

    getShortDescription(): string {
        return this.shortDescription;
    }

    getBlogUrl(): string {
        return this.blogUrl;
    }

}
