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
import { Gallery } from './../../core/models/gallery';
import { GalleryFormService } from './gallery-form.service';
import { SubmittingComponent } from '../../core/forms/submitting.component';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss'],
  providers: [GalleryFormService]
})
export class GalleryFormComponent implements OnInit, OnDestroy {
  @Input() gallery: Gallery;
  isEdit: boolean;

  // FormBuilder form
  galleryForm: FormGroup;

  // Model storing initial form values
  formGallery: Gallery;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitGalleryObj: Gallery;
  submitGallerySub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ef: GalleryFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formErrors = this.ef.formErrors;
    this.isEdit = !!this.gallery;
    this.submitBtnText = this.isEdit ? 'Update Gallery Photo' : 'Add Gallery Photo';
    // Set initial form data
    this.formGallery = this._setformGallery();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setformGallery() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // Gallery model with default null data
      return new Gallery(null, null, null);
    } else {
      // If editing existing event, create new
      // Gallery model from existing data
      return new Gallery(
        this.gallery.path,
        this.gallery.caption
      );
    }
  }

  private _buildForm() {
    this.galleryForm = this.fb.group({
      caption: [
        this.formGallery.caption,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      path: [
        this.formGallery.path,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ]
    });

    // Subscribe to form value changes
    this.formChangeSub = this.galleryForm.valueChanges.subscribe(data =>
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
      _markDirty(this.galleryForm);
    }

    this._onValueChanged();
  }

  private _onValueChanged() {
    if (!this.galleryForm) {
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
        _setErrMsgs(this.galleryForm.get(field), this.formErrors, field);
      }
    }
  }

  private _getSubmitObj() {
    // populate a new Gallery model for submission
    return new Gallery(
      this.galleryForm.get('path').value,
      this.galleryForm.get('caption').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitGalleryObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitGallerySub = this.api
        .postGalleryPhoto$(this.submitGalleryObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    } else {
      this.submitGallerySub = this.api
        .editGalleryPhoto$(this.gallery._id, this.submitGalleryObj)
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
    this.router.navigate(['/admin/gallery', res._id]);
  }

  private _handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  }

  resetForm() {
    this.galleryForm.reset();
  }

  ngOnDestroy() {
    if (this.submitGallerySub) {
      this.submitGallerySub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }
}
