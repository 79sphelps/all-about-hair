// src/app/pages/admin/event-form/event-form.component.ts
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../core/api.service';

import { Appointment } from './../../core/models/appointment';

import { AppointmentFormService } from './appointment-form.service';
import { SubmittingComponent } from '../../core/forms/submitting.component';

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
  formAppointment: Appointment;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitAppointmentObj: Appointment;
  submitAppointmentSub: Subscription;
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
    this.submitBtnText = this.isEdit ? 'Update Appointment' : 'Create Appointment';
    // Set initial form data
    this.formAppointment = this._setFormAppointment();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setFormAppointment() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // FormEventModel with default null data
      // return new FormEventModel(null, null, null, null, null, null, null);
      return new Appointment(null, null, null, null, null);
    } else {
      // If editing existing event, create new
      // FormEventModel from existing data
      return new Appointment(
        this.appointment.name,
        this.appointment.email,
        this.appointment.message,
        this.appointment.category
      );
    }
  }

  private _buildForm() {
    this.appointmentForm = this.fb.group({
      name: [
        this.formAppointment.name,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      email: [
        this.formAppointment.email,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      message: [
        this.formAppointment.message,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin)
        ]
      ],
      category: [
        this.formAppointment.category,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin)
        ]
      ]
    });

    // Subscribe to form value changes
    this.formChangeSub = this.appointmentForm.valueChanges.subscribe(data =>
      this._onValueChanged()
    );

    // If edit: mark fields dirty to trigger immediate
    // validation in case editing an event that is no
    // longer valid (for example, an event in the past)
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
            errorsObj[field] += messages[key] + '<br>';
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
    // Convert form startDate/startTime and endDate/endTime
    // to JS dates and populate a new EventModel for submission
    return new Appointment(
      this.appointmentForm.get('name').value,
      this.appointmentForm.get('email').value,
      this.appointmentForm.get('message').value,
      this.appointmentForm.get('category').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitAppointmentObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitAppointmentSub = this.api
        .postAppointment$(this.submitAppointmentObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
        this.router.navigate(['/calendar']);
    } else {
      this.submitAppointmentSub = this.api
        .editAppointment$(this.appointment._id, this.submitAppointmentObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
      this.router.navigate(['/calendar']);
    }
  }

  private _handleSubmitSuccess(res) {
    this.error = false;
    this.submitting = false;
    // Redirect to event detail
    this.router.navigate(['/calendar']);
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
    if (this.submitAppointmentSub) {
      this.submitAppointmentSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }

}