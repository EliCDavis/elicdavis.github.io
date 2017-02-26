import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NpcComponent } from './npc/npc.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NpcComponent,
    BlogComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'blog', component: BlogComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
