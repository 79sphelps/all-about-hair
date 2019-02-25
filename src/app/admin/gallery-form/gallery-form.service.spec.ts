import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GalleryFormService } from './gallery-form.service';

describe('GalleryFormService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [GalleryFormService]
        })
        .compileComponents();
      }));

  it('should be created', inject([GalleryFormService], (service: GalleryFormService) => {
    expect(service).toBeTruthy();
  }));
});
