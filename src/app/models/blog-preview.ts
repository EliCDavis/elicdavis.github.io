import * as moment from 'moment';

export class BlogPreview {

    public name: string;
    public datePublished: Date;
    public summary: string;
    public link: string;
    public dialogue: string;

    constructor() {
        this.name = "";
        this.datePublished = null;
        this.summary = "";
        this.link = "";
        this.dialogue = "";
    }

    public getDateFormatted(): string {
        return moment(this.datePublished).format("MMM Do, GGGG");
    }

}
