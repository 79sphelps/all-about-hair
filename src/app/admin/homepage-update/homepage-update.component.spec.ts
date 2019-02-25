import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittingComponent } from '../../core/forms/submitting.component';
import { LoadingComponent } from '../../core/loading.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from '../../core/utils.service';

import { HomepageUpdateComponent } from './homepage-update.component';
import { HomepageDetailsComponent } from '../homepage-details/homepage-details.component';
import { HomepageFormComponent } from '../homepage-form/homepage-form.component';

describe('HomepageUpdateComponent', () => {
  let component: HomepageUpdateComponent;
  let fixture: ComponentFixture<HomepageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageUpdateComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        HomepageDetailsComponent,
        HomepageFormComponent
      ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ApiService, AuthService, UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
