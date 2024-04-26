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
import { Subscription } from 'rxjs'
import { ApiService } from './../../core/api.service';
import { Service } from './../../core/models/service';
import { ServicesFormService } from './services-form.service';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss'],
  providers: [ServicesFormService]
})
export class ServicesFormComponent implements OnInit, OnDestroy {

  @Input() service: Service;
  isEdit: boolean;
  // FormBuilder form
  serviceForm: FormGroup;
  // Model storing initial form values
  formService: Service;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitServiceObj: Service;
  submitServiceSub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ef: ServicesFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formErrors = this.ef.formErrors;
    this.isEdit = !!this.service;
    this.submitBtnText = this.isEdit ? 'Update Service' : 'Create Service';
    // Set initial form data
    this.formService = this._setFormService();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setFormService() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // Service model with default null data
      return new Service(null, null, null, null, null);
    } else {
      // If editing existing event, create new
      // Service model from existing data
      return new Service(
        this.service.title,
        this.service.image,
        this.service.description,
        this.service.pricing,
        this.service._id,
      );
    }
  }


  initServiceItem(type?: '', price?: '', description?: '' ) {
    // initialize our service item
    return this.fb.group(
      {
        type: [type],
        price: [price],
        description: [description]
      }
    );
  }

  addServiceItem() {
    // add address to the list
    const control = <FormArray>this.serviceForm.controls['pricing'];
    control.push(this.initServiceItem());
  }

  removeServiceItem(i: number) {
    // remove address from the list
    const control = <FormArray>this.serviceForm.controls['pricing'];
    control.removeAt(i);
  }

  populateServiceItems() {
    const control = <FormArray>this.serviceForm.controls['pricing'];
    for (let i = 0; i < this.service.pricing.length; i++) {

      control.push(
        this.initServiceItem(
          this.service.pricing[i].type,
          this.service.pricing[i].price,
          this.service.pricing[i].description
        )
      );
    }

    return control;
  }

  get pricing(): FormArray { return this.serviceForm.get('pricing') as FormArray; }

  private _buildForm() {
    const newFormArray = [];
    this.service.pricing.forEach(
      function(item) {
        newFormArray.push(new FormControl(item.type));
      }
    );

    this.serviceForm = this.fb.group({
      title: [
        this.formService.title,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      image: [
        this.formService.image,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      description: [
        this.formService.description,
        Validators.maxLength(this.ef.descMax)
      ],
      pricing: this.fb.array([
      ])
      /*
      pricing: this.fb.array([
        this.initServiceItem()
      ])
      */
      /*
      pricing: new FormArray(
        newFormArray
      )
      */
    });

    this.populateServiceItems();

    // Subscribe to form value changes
    this.formChangeSub = this.serviceForm.valueChanges.subscribe(data =>
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
      _markDirty(this.serviceForm);
    }

    this._onValueChanged();
  }

  private _onValueChanged() {
    if (!this.serviceForm) {
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
        _setErrMsgs(this.serviceForm.get(field), this.formErrors, field);
      }
    }
  }

  private _getSubmitObj() {
    // populate a new Service model for submission
    return new Service(
      this.serviceForm.get('title').value,
      this.serviceForm.get('image').value,
      this.serviceForm.get('description').value,
      this.serviceForm.get('pricing').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitServiceObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitServiceSub = this.api
        .postService$(this.submitServiceObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    } else {
      this.submitServiceSub = this.api
        .editService$(this.service._id, this.submitServiceObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    }
  }

  private _handleSubmitSuccess(res) {
    this.error = false;
    this.submitting = false;
    // Redirect to event detail
    this.router.navigate(['/admin/services', res._id]);
  }

  private _handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  }

  resetForm() {
    this.serviceForm.reset();
  }

  ngOnDestroy() {
    if (this.submitServiceSub) {
      this.submitServiceSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }
}
