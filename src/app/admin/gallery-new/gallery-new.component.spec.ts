import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNewComponent } from './gallery-new.component';

describe('GalleryNewComponent', () => {
  let component: GalleryNewComponent;
  let fixture: ComponentFixture<GalleryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
