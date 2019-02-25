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

import { GalleryFormService } from './gallery-form.service';

import { AuthService } from '../../auth/auth.service';

import { GalleryFormComponent } from './gallery-form.component';

describe('GalleryFormComponent', () => {
  let component: GalleryFormComponent;
  let fixture: ComponentFixture<GalleryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFormComponent, SubmittingComponent],
      imports: [// no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule],
      providers: [GalleryFormService, ApiService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
