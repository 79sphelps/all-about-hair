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

import { SubmittingComponent } from '../../core/forms/submitting.component';

import { HomepageFormService } from './homepage-form.service';

import { AuthService } from '../../auth/auth.service';

import { HomepageFormComponent } from './homepage-form.component';

describe('HomepageFormComponent', () => {
  let component: HomepageFormComponent;
  let fixture: ComponentFixture<HomepageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageFormComponent, SubmittingComponent],
      imports: [// no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule],
      providers: [HomepageFormService, ApiService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
