import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BannerComponent } from './banner.component';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('display the title and quote', () => {
    // const fixture = TestBed.createComponent(BannerComponent);
    const element = fixture.nativeElement;

    const title = element.querySelector('h1');
    expect(title).not.toBeNull('You should have an `h1` element to display the title');
    expect(title.textContent).toContain('Hair Styling is a Must Try Fashion for All Occasions');

    //expect(title.textContent)
    //  .toContain('Always a pleasure to bet on ponies', 'You should have the `small` element inside the `h1` element');

    const subtitle = element.querySelector('p');
    expect(subtitle).not.toBeNull('You should have a `p` element to display the subtitle');
    expect(subtitle.textContent).toContain('At All About Hair, we provide custom salon care at an affordable price.');

    //const subtitle = element.querySelector('small');
    //expect(subtitle).not.toBeNull('You should have a `small` element to display the subtitle');
    //expect(subtitle.textContent).toContain('Always a pleasure to bet on ponies');
  });
  */
});
