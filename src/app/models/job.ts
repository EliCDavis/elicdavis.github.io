export class Job {

    constructor(
        private title: string,
        private company: string,
        private location: string,
        private start: string,
        private end: string,
        private points: Array<string>
    ) { }

    getTitle(): string { return this.title; }
    getCompany(): string { return this.company; }
    getLocation(): string { return this.location; }
    getStart(): string { return this.start; }
    getEnd(): string { return this.end; }
    getPoints(): Array<string> { return this.points; }
}
