import './rxjs-extensions';

import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './components/app.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesListComponent } from './components/hero-list.component';
import { HeroSearchComponent } from './components/hero-search.component';
import { HeroService }         from './services/hero.service';

import { NPCComponent } from './components/npc/npc.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BlogArchiveComponent } from './components/blog/blog-archive.component';

import { BlogService } from './services/blog.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NPCComponent,
        ToolbarComponent,
        BlogArchiveComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        BlogService,
    ]
})
export class AppModule { }
