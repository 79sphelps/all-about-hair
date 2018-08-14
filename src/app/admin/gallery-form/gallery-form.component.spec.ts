import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFormComponent } from './gallery-form.component';

describe('GalleryFormComponent', () => {
  let component: GalleryFormComponent;
  let fixture: ComponentFixture<GalleryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
