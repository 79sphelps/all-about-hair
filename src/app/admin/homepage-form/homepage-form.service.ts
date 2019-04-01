import { Injectable } from '@angular/core';
// import { SubmittingComponent } from "../../core/forms/submitting.component";

@Injectable()
export class HomepageFormService {
  validationMessages: any;

  // Set up errors object
  formErrors = {
    headline: '',
    headlinSubMsg: '',
    servicesHeadline: '',
    servicesSubMsg: '',
    aboutHeadline: '',
    aboutSubMsg: '',
    aboutImage: '',
    aboutVideoLink: '',
    stylistsHeadline: '',
    stylistsSubMsg: '',
    serviceDetailsHeadline: '',
    serviceDetailsSubMsg: '',
    contactHeadline: '',
    contactSubMsg: ''
  };

  // Min/maxlength validation
  textMin = 3;
  titleMax = 36;
  locMax = 3000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      headline: {
        required: `Headline message is <strong>required</strong>.`,
        minlength: `Headline message must be ${this.textMin} characters or more.`,
        maxlength: `Headline message must be ${this.locMax} characters or less.`
      },
      headlineSubMsg: {
        required: `Headline sub message is <strong>required</strong>.`,
        minlength: `Headline sub  message must be ${this.textMin} characters or more.`,
        maxlength: `Headline sub  message must be ${this.locMax} characters or less.`
      },
      servicesHeadline: {
        required: `You must specify a 'services' section headline.`
      },
      servicesSubMsg: {
        required: `You must specify a 'services' section sub message on the homepage.`
      },
      aboutHeadline: {
        required: `You must specify a key 'about' section headline on the homepage.`
      },
      aboutSubMsg: {
        required: `You must specify a key 'about' section sub message on the homepage.`
      },
      aboutImage: {
        required: `You must specify a key 'about' section image on the homepage.`
      },
      aboutVideoLink: {
        required: `You must specify a key 'about' section video link on the homepage.`
      },
      stylistsHeadline: {
        required: `You must specify a 'stylists' section headline on the homepage.`
      },
      stylistsSubMsg: {
        required: `You must specify a 'stylists' section sub message on the homepage.`
      },
      serviceDetailsHeadline: {
        required: `You must specify a 'service details' section headline on the homepage.`
      },
      serviceDetailsSubMsg: {
        required: `You must specify a 'service details' section sub message on the homepage.`
      },
      contactHeadline: {
        required: `You must specify a 'contact' section headline on the homepage.`
      },
      contactSubMsg: {
        required: `You must specify a 'contact' section sub message on the homepage.`
      }
    };
  }
}
