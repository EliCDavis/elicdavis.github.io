import { Component } from '@angular/core';

import { NpcService, BlogService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NpcService, BlogService]
})
export class AppComponent {
  title = 'app works!';
}
