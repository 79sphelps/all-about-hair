import { TestBed, ComponentFixture, getTestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from '../../core/utils.service';
import { ThreeColSection1Component } from './three-col-section1.component';

describe('ThreeColSection1Component', () => {
  let component: ThreeColSection1Component;
  let fixture: ComponentFixture<ThreeColSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColSection1Component ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule   // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColSection1Component);
    component = fixture.componentInstance;

    const homeComponent = fixture.componentInstance;
    homeComponent.homepage = {
      headline: 'Homepage Headline',
      headlineSubMsg: 'Homepage SubMsg',
      servicesHeadline: 'Homepage Services Headline',
      servicesSubMsg: 'Homepage Services SubMsg',
      aboutHeadline: 'Homepage About Headline',
      aboutSubMsg: 'Homepage About SubMsg',
      aboutImage: '../../../assets/images/about-img.jpg',
      aboutVideoLink: 'Homepage About Video Link',
      stylistsHeadline: 'Homepage Stylists Headline',
      stylistsSubMsg: 'Homepage Stylists SugMsg',
      serviceDetailsHeadline: 'Homepage Service Details Headline',
      serviceDetailsSubMsg: 'Homepage Service Details SubMsg',
      contactHeadline: 'Homepage Contact Headline',
      contactSubMsg: 'Homepage Contact SubMsg',
      _id: '1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an Services headline, a sub message, and a pricing button', () => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element to display the Services headline');
    expect(headline.textContent).toContain('Homepage Services Headline');

    const submessage = element.querySelector('p');
    expect(submessage).not.toBeNull('You should have a `p` element to display the Services submessage');
    expect(submessage.textContent).toContain('Homepage Services SubMsg');

    const anchor = element.querySelector('a');
    expect(anchor.textContent).toBe('Pricing Details', 'You should have an anchor tag with Pricing Details text');
  });

});
