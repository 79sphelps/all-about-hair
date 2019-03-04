import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubmittingComponent } from '../../core/forms/submitting.component';

import { ApiService } from './../../core/api.service';
import { AuthService } from '../../auth/auth.service';

import { RequestFormService } from './request-form.service';
import { RequestFormComponent } from './request-form.component';

describe('RequestFormComponent', () => {
  let component: RequestFormComponent;
  let fixture: ComponentFixture<RequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestFormComponent, SubmittingComponent],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [RequestFormService, ApiService, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the register method on submit', () => {
    spyOn(fixture.componentInstance, 'onSubmit');

    fixture.detectChanges();
    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', {});

    expect(fixture.componentInstance.onSubmit).toHaveBeenCalled();
    expect(
      (fixture.componentInstance.onSubmit as jasmine.Spy).calls.count()
    ).toBe(1, 'Looks like you are calling onSubmit several times!');
  });

  it('should display a form to send a request message', () => {
    // given a form
    const requestForm = fixture.componentInstance.requestForm;

    expect(requestForm.valid).toBe(false);

    expect(requestForm.get('name')).not.toBeNull(
      'Your form should have a `name` field'
    );
    requestForm.get('name').setValue('');
    fixture.detectChanges();
    expect(requestForm.get('name').getError('required')).toBe(
      true,
      'The `name` field should be required'
    );

    expect(requestForm.get('email')).not.toBeNull(
      'Your form should have a `email` field'
    );
    requestForm.get('email').setValue('');
    fixture.detectChanges();
    expect(requestForm.get('email').getError('required')).toBe(
      true,
      'The `email` field should be required'
    );

    expect(requestForm.get('category')).not.toBeNull(
      'Your form should have a `category` field'
    );
    requestForm.get('category').setValue('');
    fixture.detectChanges();
    expect(requestForm.get('category').getError('required')).toBe(
      true,
      'The `category` field should be required'
    );

    expect(requestForm.get('message')).not.toBeNull(
      'Your form should have a `message` field'
    );
    requestForm.get('message').setValue('');
    fixture.detectChanges();
    expect(requestForm.get('message').getError('required')).toBe(
      true,
      'The `message` field should be required'
    );

    // when adding values in the form
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    expect(button.getAttribute('disabled')).not.toBeNull(
      'Your submit button should be disabled if the form is invalid'
    );

    const name = nativeElement.querySelector('input[id="name"]');
    expect(name).not.toBeNull(
      'Your template should have an input for the name'
    );
    name.value = 'Cédric';
    name.dispatchEvent(new Event('input'));

    const email = nativeElement.querySelector('input[id="email"]');
    expect(email).not.toBeNull(
      'Your template should have an input for the email address'
    );
    email.value = 'admin@admin.com';
    email.dispatchEvent(new Event('input'));

    const category = nativeElement.querySelector('input[id="category"]');
    expect(category).not.toBeNull(
      'Your template should have an input for the category'
    );
    category.value = 'Haircut';
    category.dispatchEvent(new Event('input'));

    const message = nativeElement.querySelector('input[id="message"]');
    expect(message).not.toBeNull(
      'Your template should have an input for the message'
    );
    message.value = 'Can I schedule a haircut for Thursday, March 6th?';
    message.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then we should have a valid form, with no error
    expect(requestForm.valid).toBe(true);
    expect(button.getAttribute('disabled')).toBeNull(
      'Your submit button should not be disabled if the form is invalid'
    );
    expect(requestForm.value).toEqual({
      name: 'Cédric',
      email: 'admin@admin.com',
      category: 'Haircut',
      message: 'Can I schedule a haircut for Thursday, March 6th?'
    });
    expect(requestForm.get('name').getError('required')).toBe(null);
    expect(requestForm.get('email').getError('required')).toBe(null);
    expect(requestForm.get('category').getError('required')).toBe(null);
    expect(requestForm.get('message').getError('required')).toBe(null);
  });

  it('should expect a name between 3 and 50 characters', () => {
    // given a form
    const requestForm = fixture.componentInstance.requestForm;
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('name').getError('required')).toBe(true);
    expect(requestForm.get('name').getError('minlength')).toBeUndefined();
    expect(requestForm.get('name').getError('maxlength')).toBeUndefined();

    fixture.detectChanges();

    // when adding a too short name
    const nativeElement = fixture.nativeElement;
    const name = nativeElement.querySelector('input[id="name"]');
    name.value = 'Cé';
    name.dispatchEvent(new Event('input'));

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('name').getError('minlength')).not.toBeUndefined(
      'Your name field should have a minLength validator'
    );
    expect(requestForm.get('name').getError('minlength').requiredLength).toBe(
      3,
      'Your name field should have a minLength validator of 3 characters'
    );

    // when adding a long enough name
    name.value = 'Cédric';
    name.dispatchEvent(new Event('input'));

    // then we should have a valid form, with no error
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('name').getError('minlength')).toBe(null);

    requestForm.get('name').setValue('');
    fixture.detectChanges();

    name.value =
      'Cédricasdfjsadsdfsadlkjsjdfkljasdjfjsdfjlasjdlfjlsdfjksdfasdfjksdajjasldfj';
    name.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('name').getError('maxlength')).not.toBeUndefined(
      'Your name field should have a maxlength validator'
    );
    expect(requestForm.get('name').getError('maxlength').requiredLength).toBe(
      50,
      'Your name field should have a maxLength validator of 50 characters'
    );
  });

  it('should expect an email between 6 and 50 characters', () => {
    // given a form
    const requestForm = fixture.componentInstance.requestForm;
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('email').getError('required')).toBe(true);
    expect(requestForm.get('email').getError('minlength')).toBeUndefined();
    expect(requestForm.get('email').getError('maxlength')).toBeUndefined();

    fixture.detectChanges();

    // ----------------------------------------
    // validate against email that is too short
    const nativeElement = fixture.nativeElement;
    const email = nativeElement.querySelector('input[id="email"]');
    email.value = '@aol.';
    email.dispatchEvent(new Event('input'));

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('email').getError('minlength')).not.toBeUndefined(
      'Your email field should have a minLength validator'
    );
    expect(requestForm.get('email').getError('minlength').requiredLength).toBe(
      6,
      'Your email field should have a minLength validator of 6 characters'
    );

    // when adding a long enough email
    email.value = 'admin@admin.com';
    email.dispatchEvent(new Event('input'));

    // then we should have a valid form, with no error
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('email').getError('minlength')).toBe(null);

    // ---------------------------------------
    // validate against email that is too long
    requestForm.get('email').setValue('');
    fixture.detectChanges();

    email.value =
      'Cédricasdfjsadsdfsadlkjsjdfkljasdjfjsd@jlasjdlfjlsdfjksdfasdfjksdajjasldfj';
    email.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('email').getError('maxlength')).not.toBeUndefined(
      'Your email field should have a maxlength validator'
    );
    expect(requestForm.get('email').getError('maxlength').requiredLength).toBe(
      50,
      'Your email field should have a maxLength validator of 50 characters'
    );

    // --------------------------------------------------------
    // validate against invalid email without the '@' character
    requestForm.get('email').setValue('');
    fixture.detectChanges();

    email.value =
      'abc';
    email.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('email').getError('pattern')).not.toBeUndefined(
      'Your email field should have a pattern validator'
    );
    /*
    expect(requestForm.get('email').getError('pattern').pattern).toBe(
      '[^ @]*@[^ @]*',
      'Your email field should have a `@` character'
    );
    */

  });

  it('should expect a category between 3 and 50 characters', () => {
    // given a form
    const requestForm = fixture.componentInstance.requestForm;
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('category').getError('required')).toBe(true);
    expect(requestForm.get('category').getError('minlength')).toBeUndefined();
    expect(requestForm.get('category').getError('maxlength')).toBeUndefined();

    fixture.detectChanges();

    // when adding a too short category
    const nativeElement = fixture.nativeElement;
    const category = nativeElement.querySelector('input[id="category"]');
    category.value = 'ha';
    category.dispatchEvent(new Event('input'));

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('category').getError('minlength')).not.toBeUndefined(
      'Your category field should have a minLength validator'
    );
    expect(
      requestForm.get('category').getError('minlength').requiredLength
    ).toBe(
      3,
      'Your category field should have a minLength validator of 3 characters'
    );

    // when adding a long enough category
    category.value = 'Haircut';
    category.dispatchEvent(new Event('input'));

    // then we should have a valid form, with no error
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('category').getError('minlength')).toBe(null);

    requestForm.get('category').setValue('');
    fixture.detectChanges();

    category.value =
      'Cédricasdfjsadsdfsadlkjsjdfkljasdjfjsdfjlasjdlfjlsdfjksdfasdfjksdajjasldfj';
    category.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('category').getError('maxlength')).not.toBeUndefined(
      'Your category field should have a maxlength validator'
    );
    expect(
      requestForm.get('category').getError('maxlength').requiredLength
    ).toBe(
      50,
      'Your category field should have a maxLength validator of 50 characters'
    );
  });

  it('should expect a message between 3 and 200 characters', () => {
    // given a form
    const requestForm = fixture.componentInstance.requestForm;
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('message').getError('required')).toBe(true);
    expect(requestForm.get('message').getError('minlength')).toBeUndefined();
    expect(requestForm.get('message').getError('maxlength')).toBeUndefined();

    fixture.detectChanges();

    // when adding a too short message
    const nativeElement = fixture.nativeElement;
    const message = nativeElement.querySelector('input[id="message"]');
    message.value = 'ha';
    message.dispatchEvent(new Event('input'));

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('message').getError('minlength')).not.toBeUndefined(
      'Your message field should have a minLength validator'
    );
    expect(
      requestForm.get('message').getError('minlength').requiredLength
    ).toBe(
      3,
      'Your message field should have a minLength validator of 3 characters'
    );

    // when adding a long enough message
    message.value = 'Haircut';
    message.dispatchEvent(new Event('input'));

    // then we should have a valid form, with no error
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('message').getError('minlength')).toBe(null);

    requestForm.get('message').setValue('');
    fixture.detectChanges();

    message.value = 'Cédricasdfjsadsdfsadlkjsjdfkljasdjfjsdfjlasjdlfjlsdfjksdfasdfj';
    message.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // then the form should still be invalid
    expect(requestForm.valid).toBe(false);
    expect(requestForm.get('message').getError('maxlength')).not.toBeUndefined(
      'Your message field should have a maxlength validator'
    );

    expect(
      requestForm.get('message').getError('maxlength').requiredLength
    ).toBe(
      50,
      'Your message field should have a maxLength validator of 50 characters'
    );
  });
});
