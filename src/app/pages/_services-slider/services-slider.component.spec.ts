import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSliderComponent } from './services-slider.component';

describe('ServicesSliderComponent', () => {
  let component: ServicesSliderComponent;
  let fixture: ComponentFixture<ServicesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
