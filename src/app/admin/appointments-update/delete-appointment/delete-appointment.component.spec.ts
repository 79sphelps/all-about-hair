import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AppointmentFormComponent } from '../../appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittingComponent } from '../../../core/forms/submitting.component';
import { LoadingComponent } from '../../../core/loading.component';

import { ApiService } from './../../../core/api.service';
import { AuthService } from '../../../auth/auth.service';
import { DeleteAppointmentComponent } from './delete-appointment.component';
import { AppointmentComponent } from '../../appointment/appointment.component';
import { Appointment } from './../../../core/models/appointment';
import { AppointmentDetailComponent } from '../../appointment/appointment-detail/appointment-detail.component';


describe('DeleteAppointmentComponent', () => {
  let component: DeleteAppointmentComponent;
  let fixture: ComponentFixture<DeleteAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteAppointmentComponent,
        AppointmentComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        AppointmentComponent,
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
      providers: [ApiService, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
