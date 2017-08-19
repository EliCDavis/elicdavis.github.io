import { Observable, Subject } from 'rxjs/Rx';
import { Component, OnInit  } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidenavMode: Observable<string>;
  
    sidenavOpen$: Observable<boolean>;
  
    sidenavToggleClick$: Subject<any>;
  
    sidenavCloseRequest$: Subject<any>;
  
    constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/ic_menu_white_24px.svg'));
  
      iconRegistry.addSvgIcon(
        'sad',
        sanitizer.bypassSecurityTrustResourceUrl('assets/ic_mood_bad_black_24px.svg'));
  
      iconRegistry.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('assets/ic_play_circle_filled_white_24px.svg'));
      
      iconRegistry.addSvgIcon('km', sanitizer.bypassSecurityTrustResourceUrl('assets/km_white.svg'));
  
      this.sidenavToggleClick$ = new Subject<any>();
      this.sidenavCloseRequest$ = new Subject<any>();
    }
  
    ngOnInit() {
  
      this.sidenavMode = Observable.merge
        (
        Observable.fromEvent(window, 'resize')
          .map(() => {
            return document.documentElement.clientWidth;
          }),
        Observable.from([document.documentElement.clientWidth])
        )
        .map(x => x > 599 ? 'side' : 'over')
        .delay(100)
        .share();
  
      this.sidenavOpen$ = this.sidenavMode.combineLatest(
        this.sidenavToggleClick$
          .map(x => 'toggle')
          .merge(this.sidenavCloseRequest$.map(x => 'force'))
          .scan((acc, x) => x === 'force' ? false : !acc, false).startWith(false),
        (mode: string, toggle) => mode === 'side' ? true : toggle
      ).share();
  
    }
}
