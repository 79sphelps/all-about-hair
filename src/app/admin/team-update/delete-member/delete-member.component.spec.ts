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

import { TeamComponent } from '../../team/team.component';
import { MemberDetailComponent } from '../../team-member/member-detail/member-detail.component';
import { Personel } from '../../../core/models/personel';
import { DeleteMemberComponent } from './delete-member.component';

describe('DeleteMemberComponent', () => {
  let component: DeleteMemberComponent;
  let fixture: ComponentFixture<DeleteMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteMemberComponent,
        TeamComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        MemberDetailComponent
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
    fixture = TestBed.createComponent(DeleteMemberComponent);
    component = fixture.componentInstance;
    component.member = new Personel('Personel Name', 'Personel Role', 'Personel Bio', 'Personel Photo');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
