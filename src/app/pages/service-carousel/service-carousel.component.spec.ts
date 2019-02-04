import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCarouselComponent } from './service-carousel.component';

describe('ServiceCarouselComponent', () => {
  let component: ServiceCarouselComponent;
  let fixture: ComponentFixture<ServiceCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
