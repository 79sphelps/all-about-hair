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
import { ServicesSliderComponent } from './services-slider.component';
import { Service } from '../../core/models/service';


describe('ServicesSliderComponent', () => {
  let component: ServicesSliderComponent;
  let fixture: ComponentFixture<ServicesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSliderComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,   // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // let jQuery = require('jquery');
    fixture = TestBed.createComponent(ServicesSliderComponent);
    component = fixture.componentInstance;

    component.homepage = {
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

    component.services = [{
      'title': 'Haircut & Style',
      'description': 'Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style',
      'image': 'assets/images/haircut_utensils.webp',
      'pricing': [
          {
          'price': '$40-$70',
          'type': 'Womens',
          'description': 'description...'
        },
        {
          'price': '$30-$60',
          'type': 'Mens',
          'description': 'description...'
        },
        {
          'price': '$25-$55',
          'type': 'Children (under 12)',
          'description': 'description...'
        },
        {
          'price': '$15',
          'type': 'Neck Trim',
          'description': 'description...'
        },
        {
          'price': '$10',
          'type': 'Bang Trim',
          'description': 'description...'
        },
        {
          'price': '$25-$55',
          'type': 'Wash & Style',
          'description': 'description...'
        }
      ]
    }];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a Services headline and a sub message', () => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h2');
    expect(headline).not.toBeNull('You should have an `h2` element to display the Service details headline');
    expect(headline.textContent).toContain('Homepage Service Details Headline');

    const submessage = element.querySelector('span.subheading');
    expect(submessage).not.toBeNull('You should have a `span` element to display the Service details submessage');
    expect(submessage.textContent).toContain('Homepage Service Details SubMsg');
  });

  it('should display service details slider information', () => {
    const element = fixture.nativeElement;

    const image = element.querySelector('img');
    expect(image).not.toBeNull('You should have an img element for each service detail card');
    expect(image.getAttribute('src')).toContain('assets/images/haircut_utensils.webp');

    const title = element.querySelector('h3');
    expect(title).not.toBeNull('You should have a `h3` card element to display the individual service title');
    expect(title.textContent).toContain('Haircut & Style');

    const descrip = element.querySelector('div.serviceDescrip');
    expect(descrip).not.toBeNull('You should have a service description element to display the individual service details');
    expect(descrip.textContent).toContain(
      'Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style'
      );

    /*
    const pricing = element.querySelector('ul > li > strong');
    expect(pricing).not.toBeNull('You should have specific pricing details for each service');
    expect(pricing.textContent).toContain('Womens');
    */

    const readMore = element.querySelector('p.clearfix > a');
    expect(readMore).not.toBeNull('You should have a "Read more" anchor element for each service card');
    expect(readMore.textContent).toContain('Read more');
  });

});
