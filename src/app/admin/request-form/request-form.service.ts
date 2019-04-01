import { Injectable } from '@angular/core';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Injectable()
export class RequestFormService {
  validationMessages: any;
  inputLengths: any;

  // Set up errors object
  formErrors = {
    name: '',
    email: '',
    message: '',
    category: ''
  };

  // Min/maxlength validation
  nameMin = 3;
  nameMax = 50;
  emailMin = 6;
  emailMax = 50;
  categoryMin = 3;
  categoryMax = 50;
  messageMin = 3;
  messageMax = 50;

  constructor() {
    this.inputLengths = {
      name: {
        minlength: this.nameMin,
        maxlength: this.nameMax,
      },
      email: {
        minlength: this.emailMin,
        maxlength: this.emailMax
      },
      category: {
        minlength: this.categoryMin,
        maxlength: this.categoryMax
      },
      message: {
        minlength: this.messageMin,
        maxlength: this.messageMax
      }
    };

    this.validationMessages = {
      name: {
        required: `Name is <strong>required</strong>.`,
        minlength: `Name must be ${this.nameMin} characters or more.`,
        maxlength: `Name must be ${this.nameMax} characters or less.`
      },
      email: {
        required: `Email is <strong>required</strong>.`,
        minlength: `Email must be ${this.emailMin} characters or more.`,
        maxlength: `Email must be ${this.emailMax} characters or less.`,
        pattern: `The email address is not valid.`
      },
      message: {
        required: `The message field cannot be empty.`,
        minlength: `Message field must be ${this.messageMin} characters or more.`,
        maxlength: `Message field must be ${this.messageMax} characters or less.`
      },
      category: {
        required: `The category field cannot be empty.`,
        minlength: `Category must be ${this.categoryMin} characters or more.`,
        maxlength: `Category must be ${this.categoryMax} characters or less.`
      }
    };
  }
}
