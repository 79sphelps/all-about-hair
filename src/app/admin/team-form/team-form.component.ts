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
import { Personel } from './../../core/models/personel';
import { TeamFormService } from './team-form.service';
// import { SubmittingComponent } from '../../core/forms/submitting.component';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
  providers: [TeamFormService]
})
export class TeamFormComponent implements OnInit, OnDestroy {
  @Input() member: Personel;
  isEdit: boolean;

  // FormBuilder form
  memberForm: FormGroup;

  // Model storing initial form values
  formMember: Personel;

  // Form validation and disabled logic
  formErrors: any;
  formChangeSub: Subscription;

  // Form submission
  submitMemberObj: Personel;
  submitMemberSub: Subscription;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ef: TeamFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formErrors = this.ef.formErrors;
    this.isEdit = !!this.member;
    this.submitBtnText = this.isEdit ? 'Update Team Member' : 'Add Team Member';
    // Set initial form data
    this.formMember = this._setformMember();
    // Use FormBuilder to construct the form
    this._buildForm();
  }

  private _setformMember() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // Personel model with default null data
      return new Personel(null, null, null);
    } else {
      // If editing existing event, create new
      // Personel model from existing data
      return new Personel(
        this.member.name,
        this.member.role,
        this.member.bio,
        this.member.photo
      );
    }
  }

  private _buildForm() {
    this.memberForm = this.fb.group({
      name: [
        this.formMember.name,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      role: [
        this.formMember.role,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      bio: [
        this.formMember.bio,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ],
      photo: [
        this.formMember.photo,
        [
          Validators.required,
          Validators.minLength(this.ef.textMin),
          Validators.maxLength(this.ef.locMax)
        ]
      ]
    });

    // Subscribe to form value changes
    this.formChangeSub = this.memberForm.valueChanges.subscribe(data =>
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
      _markDirty(this.memberForm);
    }

    this._onValueChanged();
  }

  private _onValueChanged() {
    if (!this.memberForm) {
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
        _setErrMsgs(this.memberForm.get(field), this.formErrors, field);
      }
    }
  }

  private _getSubmitObj() {
    // populate a new Personel model for submission
    return new Personel(
      this.memberForm.get('name').value,
      this.memberForm.get('role').value,
      this.memberForm.get('bio').value,
      this.memberForm.get('photo').value
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitMemberObj = this._getSubmitObj();

    if (!this.isEdit) {
      this.submitMemberSub = this.api
        .postPersonel$(this.submitMemberObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    } else {
      this.submitMemberSub = this.api
        .editPersonel$(this.member._id, this.submitMemberObj)
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
    this.router.navigate(['/admin/personel', res._id]);
  }

  private _handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  }

  resetForm() {
    this.memberForm.reset();
  }

  ngOnDestroy() {
    if (this.submitMemberSub) {
      this.submitMemberSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }
}
