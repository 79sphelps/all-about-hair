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

import { GalleryComponent } from '../../gallery/gallery.component';
import { PhotoDetailComponent } from '../../gallery-photo/photo-detail/photo-detail.component';
import { Gallery } from '../../../core/models/gallery';

import { DeletePhotoComponent } from './delete-photo.component';

describe('DeletePhotoComponent', () => {
  let component: DeletePhotoComponent;
  let fixture: ComponentFixture<DeletePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeletePhotoComponent,
        GalleryComponent,
        AppointmentFormComponent,
        SubmittingComponent,
        LoadingComponent,
        PhotoDetailComponent
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
    fixture = TestBed.createComponent(DeletePhotoComponent);
    component = fixture.componentInstance;
    component.photo = new Gallery('Photo Path', 'Photo Caption');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
