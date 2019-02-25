import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';

import { SubmittingComponent } from '../../core/forms/submitting.component';

import { ServicesFormService } from './services-form.service';

import { ServicesFormComponent } from './services-form.component';
import { Service } from '../../core/models/service';

describe('ServicesFormComponent', () => {
  let component: ServicesFormComponent;
  let fixture: ComponentFixture<ServicesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesFormComponent, SubmittingComponent],
      imports: [// no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule],
      providers: [ServicesFormService, ApiService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFormComponent);
    component = fixture.componentInstance;

    component.service = new Service('New Service Title', 'New Service Description', 'New Service Image Path', [{
      'price': '$40-$70',
      'type': 'Womens',
      'description': 'description...'
    }]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
