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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from './../../core/utils.service';

import { LoadingComponent } from '../../core/loading.component';
import { SubmittingComponent } from '../../core/forms/submitting.component';

import { RequestFormComponent } from '../../admin/request-form/request-form.component';
import { TeamPublicComponent } from './team-public.component';

describe('TeamPublicComponent', () => {
  let component: TeamPublicComponent;
  let fixture: ComponentFixture<TeamPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPublicComponent, RequestFormComponent, LoadingComponent, SubmittingComponent ],
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
    fixture = TestBed.createComponent(TeamPublicComponent);
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

    component.personelList = [{
      name: 'Test Personel Name',
      role: 'Test Personel Role',
      bio: 'Test Personel Bio',
      photo: '../../../assets/images/person_4.jpg',
      _id: '1'
    }];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a team member section headline and a sub message', () => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element to display the team member section headline');
    expect(headline.textContent).toContain('Homepage Stylists Headline');

    const submessage = element.querySelector('p');
    expect(submessage).not.toBeNull('You should have a `p` element to display the team member section submessage');
    expect(submessage.textContent).toContain('Homepage Stylists SugMsg');
  });


  xit('should display team member section hover images', () => {
    const element = fixture.nativeElement;

    const image = element.querySelector('div[id="teamList"] > div.thumb > img.img-fluid');

    expect(image).not.toBeNull('You should have an img element for each team member');
    expect(image.getAttribute('src')).toContain('../../../assets/images/person_4.jpg');
  });


});
