import { TestBed, inject } from '@angular/core/testing';

import { AppointmentFormService } from './appointment-form.service';

describe('AppointmentFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentFormService]
    });
  });

  it('should be created', inject([AppointmentFormService], (service: AppointmentFormService) => {
    expect(service).toBeTruthy();
  }));
});
