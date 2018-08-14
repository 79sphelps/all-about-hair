import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesNewComponent } from './services-new.component';

describe('ServicesNewComponent', () => {
  let component: ServicesNewComponent;
  let fixture: ComponentFixture<ServicesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
