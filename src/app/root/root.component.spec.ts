import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RootComponent } from './root.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { GoogleAnalyticsEventsService } from '../google-analytics-events.service';
import { AuthService } from '../auth/auth.service';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootComponent, HeaderComponent, FooterComponent ],
      imports: [RouterTestingModule],
      providers: [GoogleAnalyticsEventsService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const element = fixture.nativeElement;
    const routerOutlet = element.querySelector('router-outlet');
    expect(routerOutlet).not.toBeNull('You need a RouterOutlet component in your root component');
  });

  it('should use the Header component', () => {
    const element = fixture.debugElement;
    expect(element.query(By.directive(HeaderComponent)))
      .not.toBeNull('You probably forgot to add HeaderComponent to the RootComponent template');
  });

  it('should use the Footer component', () => {
    const element = fixture.debugElement;
    expect(element.query(By.directive(FooterComponent)))
      .not.toBeNull('You probably forgot to add FooterComponent to the RootComponent template');
  });
});
