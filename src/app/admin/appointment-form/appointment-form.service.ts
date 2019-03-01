// src/app/pages/admin/event-form/event-form.service.ts
import { Injectable } from "@angular/core";
import { SubmittingComponent } from "../../core/forms/submitting.component";

@Injectable()
export class AppointmentFormService {
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
  textMin = 3;
  titleMax = 36;
  emailMin = 6;
  emailMax = 50;
  locMax = 1000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      name: {
        required: `Name is <strong>required</strong>.`,
        minlength: `Name must be ${this.textMin} characters or more.`,
        maxlength: `Name must be ${this.titleMax} characters or less.`
      },
      email: {
        required: `Email is <strong>required</strong>.`,
        minlength: `Email must be ${this.emailMin} characters or more.`,
        maxlength: `Email must be ${this.emailMax} characters or less.`,
        pattern: `The email address must contain at least the @character.`
      },
      message: {
        required: `The message field cannot be empty.`,
        maxlength: `The message must be ${this.descMax} characters or less.`
      },
      category: {
        required: `The category field cannot be empty.`,
        maxlength: `Category must be ${this.descMax} characters or less.`
      }
    };
  }
}
