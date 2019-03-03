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
import { ConsumerServiceComponent } from './consumer-service.component';
import { Service } from '../../core/models/service';

describe('ConsumerServiceComponent', () => {
  let component: ConsumerServiceComponent;
  let fixture: ComponentFixture<ConsumerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerServiceComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an consumer service information', async(async() => {
    const element = fixture.nativeElement;

    component.service = new Service(
      'Haircut & Styling',
      'Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style.',
      'assets/images/haircut_utensils.png',
      [
        { type: 'Womens', price: '$40-$70', description: 'description...' },
        { type: 'Mens', price: '$30-$60', description: 'description...' },
        {
          type: 'Children (under 12)',
          price: '$25-$55',
          description: 'description...'
        },
        { type: 'Neck Trim', price: '$15', description: 'description...' },
        { type: 'Bang Trim', price: '$10', description: 'description...' },
        { type: 'Wash & Style', price: '$25-$55', description: 'description...' }
      ],
      '5b718d7d02f7fc1a68e9865b'
    );

    fixture.detectChanges();

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element to display the consumer service headline');
    expect(headline.textContent).toContain('Haircut & Styling');

    const submessage = element.querySelector('p');
    expect(submessage).not.toBeNull('You should have a `p` element to display the About submessage');
    expect(submessage.textContent).toContain(
      'Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style.'
    );

    const image = element.querySelector('img');
    expect(image).not.toBeNull('You should have an consumer service image');
    expect(image.getAttribute('src')).toBe('assets/images/haircut_utensils.png', 'The `src` attribute of the image is not correct');

    const table = element.querySelector('table');
    expect(table).not.toBeNull('You should have an consumer service pricing table');
  }));

  it('should have an `Back to Homepage` link', () => {
    const element = fixture.nativeElement;

    const homepageLink = element.querySelector('a');
    expect(homepageLink).not.toBeNull('You should have an `Back to Homepage` link');
    expect(homepageLink.getAttribute('href')).toBe('index.html', 'The `Back to Homepage` link href is not correct');
  });
});
