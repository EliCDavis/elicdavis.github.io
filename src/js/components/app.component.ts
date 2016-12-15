import { Component } from '@angular/core';

/*
    <!--
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    -->
*/

@Component({
    selector: 'my-app',
    styleUrls: ['dist/css/component/app.component.css'],
    template: `
        

        <!--mine-->
        <toolbar></toolbar>
        <div class="layout-row flex">
            <div class="flex layout-column">
                <blog-archive *ngIf="displayBlogArchieve" class="flex layout-column"></blog-archive>
            </div>
            <npc class="flex-20 layout-column"></npc>
        </div>
    `,
})
export class AppComponent {
    title = 'Tour of Heroes';
}
