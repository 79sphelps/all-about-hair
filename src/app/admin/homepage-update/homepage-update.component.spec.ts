import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageUpdateComponent } from './homepage-update.component';

describe('HomepageUpdateComponent', () => {
  let component: HomepageUpdateComponent;
  let fixture: ComponentFixture<HomepageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
