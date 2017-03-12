import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { BlogService } from '../service';

@Component({
  selector: 'app-blog-reader',
  templateUrl: './blog-reader.component.html',
  styleUrls: ['./blog-reader.component.css']
})
export class BlogReaderComponent implements OnInit {

  constructor(private route: Router, private blogService: BlogService) {
    route.events.flatMap(route => {
      return blogService.getBlog(route.url.split("/")[2])
    }).subscribe(url => {
      console.log(url);
    });
  }

  ngOnInit() {
  }

}
