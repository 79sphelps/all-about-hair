import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoComponent } from './gallery-photo.component';

describe('GalleryPhotoComponent', () => {
  let component: GalleryPhotoComponent;
  let fixture: ComponentFixture<GalleryPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
