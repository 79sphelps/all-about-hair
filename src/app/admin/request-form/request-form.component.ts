import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { ApiService } from './../../core/api.service';
import { Request } from './../../core/models/request';
import { RequestFormService } from './request-form.service';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
  providers: [RequestFormService]
})
export class RequestFormComponent implements OnInit, OnDestroy {
  @Input() request: Request;
  isEdit: boolean;

  // FormBuilder form
  requestForm: FormGroup;

  // Model storing initial form values
  formRequest: Request;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitRequestObj: Request;
  submitRequestSub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ef: RequestFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formErrors = this.ef.formErrors;
    this.isEdit = !!this.request;
    this.submitBtnText = this.isEdit ? 'Update Request' : 'Send';
    // Set initial form data
    this.formRequest = this._setformRequest();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setformRequest() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // Request model with default null data
      return new Request(null, null, null, null, null);
    } else {
      // If editing existing event, create new
      // Request model from existing data
      return new Request(
        this.request.name,
        this.request.email,
        this.request.category,
        this.request.message
      );
    }
  }

  private _buildForm() {
    this.requestForm = this.fb.group({
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
    this.formChangeSub = this.requestForm.valueChanges.subscribe(data =>
      this._onValueChanged()
    );

    // If edit: mark fields dirty to trigger immediate
    // validation in case editing an event that is no
    // longer valid
    if (this.isEdit) {
      const _markDirty = group => {
        for (const i in group.controls) {
          if (group.controls.hasOwnProperty(i)) {
            group.controls[i].markAsDirty();
          }
        }
      };
      _markDirty(this.requestForm);
    }

    this._onValueChanged();
  }

  private _onValueChanged() {
    if (!this.requestForm) {
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
              + (this.ef.inputLengths[field].minlength - this.requestForm.get(field).value.length)
              + ' characters.' + '<br>';
            } else if (key === 'maxlength') {
              errorsObj[field] += messages[key] + 'Please remove '
              + (this.requestForm.get(field).value.length - this.ef.inputLengths[field].maxlength)
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
        // Set errors for fields
        // Clear previous error message (if any)
        this.formErrors[field] = '';
        _setErrMsgs(this.requestForm.get(field), this.formErrors, field);
      }
    }
  }

  private _getSubmitObj() {
    return new Request(
      this.requestForm.get('name').value,
      this.requestForm.get('email').value,
      this.requestForm.get('category').value,
      this.requestForm.get('message').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitRequestObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitRequestSub = this.api
        .postRequest$(this.submitRequestObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    } else {
      this.submitRequestSub = this.api
        .editRequest$(this.request._id, this.submitRequestObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
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

    // Redirect to request detail
    this.router.navigate(['/admin/requests', res._id]);
  }

  private _handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  }

  resetForm() {
    this.requestForm.reset();
  }

  ngOnDestroy() {
    if (this.submitRequestSub) {
      this.submitRequestSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }
}
