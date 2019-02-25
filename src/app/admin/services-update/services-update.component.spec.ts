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

import { ServiceComponent } from '../service/service.component';
import { ServicesFormComponent } from '../services-form/services-form.component';
import { ServiceDetailComponent } from '../service/service-detail/service-detail.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { ServicesUpdateComponent } from './services-update.component';

describe('ServicesUpdateComponent', () => {
  let component: ServicesUpdateComponent;
  let fixture: ComponentFixture<ServicesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServicesUpdateComponent,
        ServicesFormComponent,
        SubmittingComponent,
        LoadingComponent,
        ServiceComponent,
        DeleteServiceComponent,
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
      providers: [ApiService, AuthService, UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
