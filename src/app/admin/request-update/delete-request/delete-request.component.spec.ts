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

import { RequestComponent } from '../../request/request.component';
import { RequestDetailComponent } from '../../request/request-detail/request-detail.component';
import { DeleteRequestComponent } from './delete-request.component';
import { Request } from '../../../core/models/request';

describe('DeleteRequestComponent', () => {
  let component: DeleteRequestComponent;
  let fixture: ComponentFixture<DeleteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteRequestComponent,
        RequestComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        RequestDetailComponent
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
    fixture = TestBed.createComponent(DeleteRequestComponent);
    component = fixture.componentInstance;
    component.request = new Request('Request Name', 'Request Email', 'Request Message', 'Request Category');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
