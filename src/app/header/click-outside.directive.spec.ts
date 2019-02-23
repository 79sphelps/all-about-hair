import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  let _element: ElementRef;

  beforeEach(async(() => {
    _element = new ElementRef('');

    TestBed.configureTestingModule({
      declarations: [ ClickOutsideDirective ]
    })
    .compileComponents();
  }));

  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(_element);
    expect(directive).toBeTruthy();
  });
});

