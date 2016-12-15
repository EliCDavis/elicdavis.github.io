import { Component } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: `
        <div class="toolbar">
            <button> Home </button>        
            <button> Blog </button>
            <button> Projects </button>
        </div>
    `,
    styles: [`
        .toolbar {
            color: #fff6ef;
            background-color: #595449;
            max-height: 40px;
            min-height: 40px;
            padding: 5px;
        }
        button {
            background-color: #3d6641;
            margin: 5px;
            color: white;
            border-width: 1px;
            border-style: solid;
            border-color: #3a593d;
        }
    `]
})
export class ToolbarComponent {

    constructor () {

    }

}
