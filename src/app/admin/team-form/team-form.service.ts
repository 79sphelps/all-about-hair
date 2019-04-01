import { Injectable } from '@angular/core';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Injectable()
export class TeamFormService {
  validationMessages: any;
  // Set up errors object
  formErrors = {
    name: '',
    role: '',
    bio: '',
    photo: ''
  };

  // Min/maxlength validation
  textMin = 3;
  titleMax = 36;
  locMax = 1000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      name: {
        minlength: `Name must be ${this.textMin} characters or more.`
      },
      role: {
        minlength: `Role must be ${this.textMin} characters or more.`
      },
      bio: {
        minlength: `Bio must be ${this.textMin} characters or more.`
      },
      photo: {
        minlength: `Photo path must be ${this.textMin} characters or more.`
      }
    };
  }
}
