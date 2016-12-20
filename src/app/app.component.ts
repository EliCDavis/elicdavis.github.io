/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { NPCService } from './services'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    './angular-material.min.css',
  ],
  template: `
    <toolbar></toolbar>

    <div class="layout-row flex">
        <div class="flex layout-column">
            <router-outlet ></router-outlet>
        </div>
        <npc class="flex-20 layout-column"></npc>
    </div>
  `,
  providers: [NPCService]
})
export class AppComponent {

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
