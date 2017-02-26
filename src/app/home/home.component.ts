import { Component, OnInit } from '@angular/core';

import { Dialogue } from '../models/dialogue';
import { NpcService } from '../service/npc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private npcService: NpcService) { 
    
  }

  ngOnInit() {
    this.npcService.giveDialouge$(new Dialogue(
      "Welcome",
      ["Welcome to my site!"],
      null
    ));
  }

}
