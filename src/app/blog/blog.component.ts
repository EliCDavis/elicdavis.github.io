import { BlogList } from '../models/blog-list';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService, NpcService } from '../service';
import { Dialogue } from '../models/dialogue';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: BlogList;

  constructor(private blogService: BlogService, private npcService: NpcService) { }

  ngOnInit() {
    
    this.npcService.giveDialouge$(new Dialogue(
      "Welcome",
      ["I some times like to write down my ideas."],
      null
    ));

    this.blogService.getBlog$().subscribe((response) => {
      console.log("Loading Response: ", response);
      this.blogs = response;
    })

  }

}
