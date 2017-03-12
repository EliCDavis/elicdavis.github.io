

export class Blog {

    private title: string;

    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    public getTitle(): string {
        return this.title;
    }

    public getContent(): string {
        return this.content;
    }

}
