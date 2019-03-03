import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { AppointmentsNewComponent } from './appointments-new.component';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittingComponent } from '../../core/forms/submitting.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';


describe('AppointmentsNewComponent', () => {
  let component: AppointmentsNewComponent;
  let fixture: ComponentFixture<AppointmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppointmentsNewComponent,
        AppointmentFormComponent,
        SubmittingComponent
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
    fixture = TestBed.createComponent(AppointmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a sub title that says `Request New Appointment`', async(async() => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element containing `Request New Appointment` text');
    expect(headline.textContent).toContain('Request New Appointment');
  }));

  it('should use the AppointmentFormComponent component', () => {
    const element = fixture.debugElement;
    expect(element.query(By.directive(AppointmentFormComponent)))
      .not.toBeNull('You probably forgot to add AppointmentFormComponent to the Calendar template');
  });
});
