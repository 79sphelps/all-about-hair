// src/app/header/header.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  navToggled = new EventEmitter();
  navOpen = false;

  constructor(public router: Router, public auth: AuthService) {}

  ngOnInit() {
    // If nav is open after routing, close it

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart && this.navOpen))
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

  /*
  sendEvent() {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }
  */

}
