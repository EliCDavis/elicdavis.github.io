import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'resume', component: ResumeComponent },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        { path: '**', component: PageNotFoundComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
