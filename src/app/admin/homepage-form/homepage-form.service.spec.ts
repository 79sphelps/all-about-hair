import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomepageFormService } from './homepage-form.service';

describe('HomepageFormService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [HomepageFormService]
        })
        .compileComponents();
      }));

  it('should be created', inject([HomepageFormService], (service: HomepageFormService) => {
    expect(service).toBeTruthy();
  }));
});
