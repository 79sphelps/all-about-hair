import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittingComponent } from '../../core/forms/submitting.component';
import { LoadingComponent } from '../../core/loading.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from '../../core/utils.service';

import { GalleryComponent } from '../gallery/gallery.component';
import { GalleryFormComponent } from '../gallery-form/gallery-form.component';
import { PhotoDetailComponent } from '../gallery-photo/photo-detail/photo-detail.component';
import { DeletePhotoComponent } from './delete-photo/delete-photo.component';
import { GalleryUpdateComponent } from './gallery-update.component';

describe('GalleryUpdateComponent', () => {
  let component: GalleryUpdateComponent;
  let fixture: ComponentFixture<GalleryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryUpdateComponent,
        GalleryFormComponent,
        SubmittingComponent,
        LoadingComponent,
        GalleryComponent,
        DeletePhotoComponent,
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
      providers: [ApiService, AuthService, UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
