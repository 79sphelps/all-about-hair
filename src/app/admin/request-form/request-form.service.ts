// src/app/pages/admin/event-form/event-form.service.ts
import { Injectable } from "@angular/core";
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Injectable()
export class RequestFormService {
  validationMessages: any;
  // Set up errors object
  formErrors = {
    name: "",
    email: "",
    message: "",
    category: "",
    date: ""
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
        pattern: `The email address must contain at least the @ character.`
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
