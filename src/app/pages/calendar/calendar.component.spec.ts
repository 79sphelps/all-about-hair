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
import { By } from '@angular/platform-browser';

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

describe('CalendarComponent', () => {
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

  it('should display a title that says `Calendar`', async(async() => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element containing `Calendar` text');
    expect(headline.textContent).toContain('Calendar');
  }));

  it('should display a Google Calendar iframe', async(async() => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('iframe');
    expect(headline).not.toBeNull('You should have an `iframe` element to display the Google Calendar');
  }));

  it('should have an `src` attribute in the Google Calendar iframe`', () => {
    const element = fixture.nativeElement;

    const image = element.querySelector('iframe');
    expect(image).not.toBeNull('You should have a src link in the iframe that points to the Google API');
    expect(image.getAttribute('src')).toBe(
      'https://calendar.google.com/calendar/embed?src=j4okpbp2lcn3fdaph05gll6sto%40group.calendar.google.com&ctz=America%2FLos_Angeles',
      'The `src` attribute of the iframe is incorrect'
    );
  });

  it('should use the AppointmentsNewComponent component', () => {
    const element = fixture.debugElement;
    expect(element.query(By.directive(AppointmentsNewComponent)))
      .not.toBeNull('You probably forgot to add AppointmentsNewComponent to the Calendar template');
  });
});
