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

import { TeamComponent } from '../team/team.component';
import { TeamFormComponent } from '../team-form/team-form.component';
import { MemberDetailComponent } from '../team-member/member-detail/member-detail.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { TeamUpdateComponent } from './team-update.component';

describe('TeamUpdateComponent', () => {
  let component: TeamUpdateComponent;
  let fixture: ComponentFixture<TeamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamUpdateComponent,
        TeamFormComponent,
        SubmittingComponent,
        LoadingComponent,
        TeamComponent,
        DeleteMemberComponent,
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
      providers: [ApiService, AuthService, UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
