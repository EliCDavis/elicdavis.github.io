
import { Observable } from 'rxjs/Rx';

export class Dialogue {

    private title: string;

    private text: string[];

    private options: Dialogue[];

    constructor(title: string, text: string[], options: Dialogue[]) {
        this.title = title;
        this.text = text;
        this.options = options;
    }

    public textToObservable(index: number): Observable<any> {
        return Observable.from(this.text[index]);
    }

    public getText(): string[] {
        return this.text;
    }

    public getOptions(): Dialogue[] {
        return this.options;
    }

}
