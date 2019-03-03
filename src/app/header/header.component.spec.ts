import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AuthService } from '../auth/auth.service';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { ClickOutsideDirective } from './click-outside.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ClickOutsideDirective ],
      imports: [RouterTestingModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a `navOpen` field', () => {
    component.ngOnInit();
    expect(component.navOpen)
      .toBe(false, 'Check that `navOpen` is initialized with `false`.' +
        'Maybe you forgot to declare `navOpen` in your component.');
  });

  it('should have a `toggleNav` method', () => {
    expect(component.toggleNav)
      .not.toBeNull('Maybe you forgot to declare a `toggleNav()` method');
    component.toggleNav();
    expect(component.navOpen)
      .toBe(true, '`toggleNav()` should change `navOpen` from `false` to `true`');
    component.toggleNav();
    expect(component.navOpen)
      .toBe(false, '`toggleNav()` should change `navOpen` from `true` to `false`');
  });

  it('should use routerLink to navigate', () => {
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    expect(links.length).toBe(1, 'You should have only one routerLink to the Calendar page.');
  });

  it('should display a `Log In` link if the user is not logged in', () => {
    // const element = fixture.nativeElement;
    const compiled = fixture.debugElement.nativeElement;

    const info = compiled.querySelector('#loggedInAnchor');
    // const info = fixture.debugElement.query(By.css('#loggedInAnchor'));
    expect(info)
      .not.toBeNull('You should have a `span` element with the id `loggedInAnchor` to display the user info');
    expect(info.textContent).toContain('Log In', 'You should display the Log In link in the `span` element');
    // expect(compiled.querySelector('#loggedInAnchor').textContent).toContain('Log In');
  });

});
