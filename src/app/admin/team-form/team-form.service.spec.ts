import { TestBed, inject } from '@angular/core/testing';

import { TeamFormService } from './team-form.service';

describe('TeamFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamFormService]
    });
  });

  it('should be created', inject([TeamFormService], (service: TeamFormService) => {
    expect(service).toBeTruthy();
  }));
});
