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

import { AppointmentsComponent } from '../../admin/appointments/appointments.component';
import { AppointmentDetailComponent } from '../../admin/appointment/appointment-detail/appointment-detail.component';
import { AppointmentComponent } from '../../admin/appointment/appointment.component';
import { AppointmentsNewComponent } from '../../admin/appointments-new/appointments-new.component';
import { AppointmentFormComponent } from '../../admin/appointment-form/appointment-form.component';
import { CalendarComponent } from './calendar.component';

xdescribe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        LoadingComponent,
        AppointmentsNewComponent,
        AppointmentFormComponent,
        AppointmentComponent,
        AppointmentsComponent,
        AppointmentDetailComponent,
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
      providers: [ApiService, AuthService, UtilsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
