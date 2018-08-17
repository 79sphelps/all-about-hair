import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsNewComponent } from './appointments-new.component';

describe('AppointmentsNewComponent', () => {
  let component: AppointmentsNewComponent;
  let fixture: ComponentFixture<AppointmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
