import { TestBed, ComponentFixture, getTestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from './../../core/utils.service';
import { BannerComponent } from './banner.component';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule   // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
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


  it('display the title and quote', () => {
    // const fixture = TestBed.createComponent(BannerComponent);
    const element = fixture.nativeElement;

    const title = element.querySelector('h1');
    expect(title).not.toBeNull('You should have an `h1` element to display the title');
    // expect(title.textContent).toContain('Hair Styling is a Must Try Fashion for All Occasions');

    const subtitle = element.querySelector('p');
    expect(subtitle).not.toBeNull('You should have a `p` element to display the subtitle');
    // expect(subtitle.textContent).toContain('At All About Hair, we provide custom salon care at an affordable price.');
  });

  it('should have a button that says View Custom Services', () => {
    // const fixture = TestBed.createComponent(BannerComponent);
    const element = fixture.nativeElement;

    const button = element.querySelector('[id="bannerBtn"]');
    expect(button).not.toBeNull('You should have an `View Custom Services` element that is a button');
    expect(button.textContent).toContain('View Custom Services');
    expect(button.getAttribute('href')).toBe('#price');
  });

  it('should have a background banner image', () => {
    // const fixture = TestBed.createComponent(BannerComponent);
    const element = fixture.nativeElement;

    const image = element.querySelector('img');
    expect(image).not.toBeNull('You should have a background banner image');
    expect(image.getAttribute('src')).toBe('../../../assets/images/header-img.webp', 'The `src` attribute of the image is not correct');
  });

});
