import { Injectable } from '@angular/core';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Injectable()
export class ServicesFormService {
  validationMessages: any;
  // Set up errors object
  formErrors = {
    title: '',
    image: '',
    description: '',
    pricing: ''
  };

  // Min/maxlength validation
  textMin = 3;
  titleMax = 36;
  locMax = 1000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      title: {
        required: `Title is <strong>required</strong>.`,
        minlength: `Title must be ${this.textMin} characters or more.`,
        maxlength: `Title must be ${this.titleMax} characters or less.`
      },
      image: {
        required: `Image is <strong>required</strong>.`,
        minlength: `Image must be ${this.textMin} characters or more.`,
        maxlength: `Image must be ${this.locMax} characters or less.`
      },
      description: {
        maxlength: `Description must be ${this.descMax} characters or less.`
      }
    };
  }
}
