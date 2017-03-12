import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Converter } from 'showdown';

import { BlogService } from '../service';



@Component({
  selector: 'app-blog-reader',
  templateUrl: './blog-reader.component.html',
  styleUrls: ['./blog-reader.component.css']
})
export class BlogReaderComponent implements OnInit {

  converter: Converter;

  content: string;

  constructor(private route: Router, private blogService: BlogService) {
    
    this.converter = new Converter();
    
    route.events
      .flatMap(route => {
        return blogService.getBlog(route.url.split("/")[2])
      })
      .map(data => {
        return this.converter.makeHtml(data);
      })
      .subscribe(html => {
        this.content = html;
      });
  }

  ngOnInit() {
  }

}
