import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs'
import { Subscription } from 'rxjs';
import { ApiService } from './../../core/api.service';
import { Appointment } from './../../core/models/appointment';
import { AppointmentFormService } from './appointment-form.service';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
  providers: [AppointmentFormService]
})
export class AppointmentFormComponent implements OnInit, OnDestroy {
  @Input() appointment: Appointment;
  isEdit: boolean;

  // FormBuilder form
  appointmentForm: FormGroup;

  // Model storing initial form values
  formRequest: Appointment;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitRequestObj: Appointment;
  submitRequestSub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ef: AppointmentFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formErrors = this.ef.formErrors;
    this.isEdit = !!this.appointment;
    this.submitBtnText = this.isEdit
      ? 'Update Appointment'
      : 'Request Appointment';
    // Set initial form data
    this.formRequest = this._setformRequest();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setformRequest() {
    if (!this.isEdit) {
      // If creating a new appt, create new
      // Appointment model with default null data
      return new Appointment(null, null, null, null, null);
    } else {
      // If editing existing appt, create new
      // Appointment model from existing data
      return new Appointment(
        this.appointment.name,
        this.appointment.email,
        this.appointment.category,
        this.appointment.message
      );
    }
  }

  private _buildForm() {
    this.appointmentForm = this.fb.group({
      name: [
        this.formRequest.name,
        [
          Validators.required,
          Validators.minLength(this.ef.nameMin),
          Validators.maxLength(this.ef.nameMax)
        ]
      ],
      email: [
        this.formRequest.email,
        [
          Validators.required,
          Validators.minLength(this.ef.emailMin),
          Validators.maxLength(this.ef.emailMax),
          Validators.pattern('[^ @]*@[^ @]*')
        ]
      ],
      category: [
        this.formRequest.category,
        [
          Validators.required,
          Validators.minLength(this.ef.categoryMin),
          Validators.maxLength(this.ef.categoryMax)
        ]
      ],
      message: [
        this.formRequest.message,
        [
          Validators.required,
          Validators.minLength(this.ef.messageMin),
          Validators.maxLength(this.ef.messageMax)
        ]
      ]
    });

    // Subscribe to form value changes
    this.formChangeSub = this.appointmentForm.valueChanges.subscribe(data =>
      this._onValueChanged()
    );

    // If edit: mark fields dirty to trigger immediate
    // validation in case editing an appt that is no
    // longer valid
    if (this.isEdit) {
      const _markDirty = group => {
        for (const i in group.controls) {
          if (group.controls.hasOwnProperty(i)) {
            group.controls[i].markAsDirty();
          }
        }
      };
      _markDirty(this.appointmentForm);
    }

    this._onValueChanged();
  }

  private _onValueChanged() {
    if (!this.appointmentForm) {
      return;
    }
    const _setErrMsgs = (
      control: AbstractControl,
      errorsObj: any,
      field: string
    ) => {
      if (control && control.dirty && control.invalid) {
        const messages = this.ef.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            if (key === 'minlength') {
              errorsObj[field] += messages[key] + 'We need another '
              + (this.ef.inputLengths[field].minlength - this.appointmentForm.get(field).value.length)
              + ' characters.' + '<br>';
            } else if (key === 'maxlength') {
              errorsObj[field] += messages[key] + 'Please remove '
              + (this.appointmentForm.get(field).value.length - this.ef.inputLengths[field].maxlength)
              + ' characters.' + '<br>';
            } else {
              errorsObj[field] += messages[key] + '<br>';
            }
          }
        }
      }
    };

    // Check validation and set errors
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // Set errors for fields not inside datesGroup
        // Clear previous error message (if any)
        this.formErrors[field] = '';
        _setErrMsgs(this.appointmentForm.get(field), this.formErrors, field);
      }
    }
  }

  private _getSubmitObj() {
    // populate a new Appointment model for submission
    return new Appointment(
      this.appointmentForm.get('name').value,
      this.appointmentForm.get('email').value,
      this.appointmentForm.get('category').value,
      this.appointmentForm.get('message').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitRequestObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitRequestSub = this.api
        .postAppointment$(this.submitRequestObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );

      this.router.navigate(['/calendar']);

      this.resetForm();
    } else {
      this.submitRequestSub = this.api
        .editAppointment$(this.appointment._id, this.submitRequestObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );

      // Re-route only AFTER a few seconds! There are issues, otherwise!
      setTimeout(
        function() {
          // Redirect to calendar details
          this.router.navigate(['/admin/appointments']);
        }.bind(this),
        2000
      );
    }
  }

  private _handleSubmitSuccess(res) {
    this.error = false;
    // this.submitting = false;

    setTimeout(
      function() {
        this.submitting = false;
      }.bind(this),
      3000
    );
  }

  private _handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  }

  resetForm() {
    this.appointmentForm.reset();
  }

  ngOnDestroy() {
    if (this.submitRequestSub) {
      this.submitRequestSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }
}
