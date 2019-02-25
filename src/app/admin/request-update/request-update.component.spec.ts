import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittingComponent } from '../../core/forms/submitting.component';
import { LoadingComponent } from '../../core/loading.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from '../../core/utils.service';

import { RequestComponent } from '../request/request.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RequestDetailComponent } from '../request/request-detail/request-detail.component';
import { DeleteRequestComponent } from './delete-request/delete-request.component';
import { RequestUpdateComponent } from './request-update.component';

describe('RequestUpdateComponent', () => {
  let component: RequestUpdateComponent;
  let fixture: ComponentFixture<RequestUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RequestUpdateComponent,
        RequestFormComponent,
        SubmittingComponent,
        LoadingComponent,
        RequestComponent,
        DeleteRequestComponent,
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
      providers: [ApiService, AuthService, UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
