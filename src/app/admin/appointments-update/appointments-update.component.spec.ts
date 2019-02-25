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

import { AppointmentsUpdateComponent } from './appointments-update.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { Appointment } from './../../core/models/appointment';

import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';
import { AppointmentDetailComponent } from '../appointment/appointment-detail/appointment-detail.component';

describe('AppointmentsUpdateComponent', () => {
  let component: AppointmentsUpdateComponent;
  let fixture: ComponentFixture<AppointmentsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppointmentsUpdateComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        AppointmentComponent,
        DeleteAppointmentComponent,
        AppointmentDetailComponent
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
