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

import { ServiceComponent } from '../../service/service.component';
import { ServiceDetailComponent } from '../../service/service-detail/service-detail.component';
import { Service } from '../../../core/models/service';
import { DeleteServiceComponent } from './delete-service.component';


describe('DeleteServiceComponent', () => {
  let component: DeleteServiceComponent;
  let fixture: ComponentFixture<DeleteServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteServiceComponent,
        ServiceComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        ServiceDetailComponent
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceComponent);
    component = fixture.componentInstance;
    component.service = new Service('New Service Title', 'New Service Description', 'New Service Image Path', [{}]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
