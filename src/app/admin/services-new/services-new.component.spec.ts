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
import { SubmittingComponent } from '../../core/forms/submitting.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';

import { ServicesFormComponent } from '../services-form/services-form.component';
import { ServicesNewComponent } from './services-new.component';

xdescribe('ServicesNewComponent', () => {
  let component: ServicesNewComponent;
  let fixture: ComponentFixture<ServicesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServicesNewComponent,
        ServicesFormComponent,
        SubmittingComponent
      ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [ApiService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesNewComponent);
    component = fixture.componentInstance;
    component.pageTitle = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
