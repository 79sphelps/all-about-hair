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

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from './../../core/utils.service';

import { LoadingComponent } from '../../core/loading.component';
import { SubmittingComponent } from '../../core/forms/submitting.component';


import { GallerySectionComponent } from '../gallery-section/gallery-section.component';
import { ServicesSliderComponent } from '../services-slider/services-slider.component';
import { ThreeColSection1Component } from '../three-col-section1/three-col-section1.component';
import { AboutComponent } from '../about/about.component';
import { BannerComponent } from '../banner/banner.component';
import { TeamPublicComponent } from '../team-public/team-public.component';
import { ContactComponent } from '../contact/contact.component';

import { RequestFormComponent } from '../../admin/request-form/request-form.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GallerySectionComponent,
        ServicesSliderComponent,
        ThreeColSection1Component,
        AboutComponent,
        BannerComponent,
        TeamPublicComponent,
        ContactComponent,
        RequestFormComponent,
        LoadingComponent,
        SubmittingComponent
      ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
