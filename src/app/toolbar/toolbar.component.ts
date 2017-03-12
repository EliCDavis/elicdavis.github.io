import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  curRoute: string;

  constructor(private route: Router) {
    route.events.subscribe(url => {
      this.curRoute = url.url;
    });
  }

  ngOnInit() {
  }

}
