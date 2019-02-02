import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColSection1Component } from './three-col-section1.component';

describe('ThreeColSection1Component', () => {
  let component: ThreeColSection1Component;
  let fixture: ComponentFixture<ThreeColSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
