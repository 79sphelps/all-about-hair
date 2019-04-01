import { Injectable } from '@angular/core';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Injectable()
export class GalleryFormService {
  validationMessages: any;
  // Set up errors object
  formErrors = {
    caption: '',
    path: ''
  };

  // Min/maxlength validation
  textMin = 3;
  titleMax = 36;
  locMax = 1000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      caption: {
        minlength: `Caption must be ${this.textMin} characters or more.`
      },
      path: {
        minlength: `Path must be ${this.textMin} characters or more.`
      }
    };
  }
}
