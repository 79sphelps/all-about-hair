import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionComponent } from './gallery-section.component';

describe('GallerySectionComponent', () => {
  let component: GallerySectionComponent;
  let fixture: ComponentFixture<GallerySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
