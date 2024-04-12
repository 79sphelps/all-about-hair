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
import { By } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from './../../core/utils.service';

import { LoadingComponent } from '../../core/loading.component';
import { SubmittingComponent } from '../../core/forms/submitting.component';

import { RequestFormComponent } from '../../admin/request-form/request-form.component';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent, RequestFormComponent, LoadingComponent, SubmittingComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule   // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
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

    component.contact = {
      location: 'Test Location Name',
      phone: 'Test Phone',
      email: 'Test Email',
      hours: 'Test Hours',
      _id: '1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a Contact section headline and a sub message', () => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element to display the Contact details headline');
    expect(headline.textContent).toContain('Homepage Contact Headline');

    const submessage = element.querySelector('p');
    expect(submessage).not.toBeNull('You should have a `p` element to display the Contact details submessage');
    expect(submessage.textContent).toContain('Homepage Contact SubMsg');
  });

  it('should display Contact section details', () => {
    const element = fixture.nativeElement;

    const location = element.querySelector('p#contactLocation');
    expect(location).not.toBeNull('You should have an `p` element for the contact location');
    expect(location.textContent).toContain('Test Location Name');

    const title = element.querySelector('p#contactPhone');
    expect(title).not.toBeNull('You should have a `p` element to display the contact phone number');
    expect(title.textContent).toContain('Test Phone');

    const email = element.querySelector('p#contactEmail');
    expect(email).not.toBeNull('You should have a `p` element to display the contact email');
    expect(email.textContent).toContain('Test Email');
  });

  it('should use the RequestFormComponent component', () => {
    const element = fixture.debugElement;
    expect(element.query(By.directive(RequestFormComponent)))
      .not.toBeNull('You probably forgot to add RequestFormComponent to the ContactComponent template');
  });

});
