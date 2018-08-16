import { TestBed, inject } from '@angular/core/testing';

import { RequestFormService } from './request-form.service';

describe('RequestFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestFormService]
    });
  });

  it('should be created', inject([RequestFormService], (service: RequestFormService) => {
    expect(service).toBeTruthy();
  }));
});
