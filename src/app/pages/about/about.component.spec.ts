import { TestBed, ComponentFixture, getTestBed, async, inject, tick } from '@angular/core/testing';
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

import { defer } from 'rxjs/observable/defer';

import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { UtilsService } from '../../core/utils.service';
import { AboutComponent } from './about.component';


export function fakeAsyncResponse<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

const homepageStub = {
  get() {
    return fakeAsyncResponse([
      {
        headline: 'Homepage Headline',
        headlineSubMsg: 'Homepage SubMsg',
        servicesHeadline: 'Homepage Services Headline',
        servicesSubMsg: 'Homepage Services SubMsg',
        aboutHeadline: 'Homepage About Headline',
        aboutSubMsg: 'Homepage About SubMsg',
        aboutImage: '../../../assets/images/about-img.jpg',
        aboutVideoLink: 'Homepage About Video Link',
        stylistsHeadline: 'Homepage Stylists Headline',
        stylistsSubMsg: 'Homepage Stylists SugMsg',
        serviceDetailsHeadline: 'Homepage Service Details Headline',
        serviceDetailsSubMsg: 'Homepage Service Details SubMsg',
        contactHeadline: 'Homepage Contact Headline',
        contactSubMsg: 'Homepage Contact SubMsg',
        _id: '1'
      }
    ]);
  }
};


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

    const homeComponent = fixture.componentInstance;
    homeComponent.homepage = {
      headline: 'Homepage Headline',
      headlineSubMsg: 'Homepage SubMsg',
      servicesHeadline: 'Homepage Services Headline',
      servicesSubMsg: 'Homepage Services SubMsg',
      aboutHeadline: 'Homepage About Headline',
      aboutSubMsg: 'Homepage About SubMsg',
      aboutImage: '../../../assets/images/about-img.jpg',
      aboutVideoLink: 'Homepage About Video Link',
      stylistsHeadline: 'Homepage Stylists Headline',
      stylistsSubMsg: 'Homepage Stylists SugMsg',
      serviceDetailsHeadline: 'Homepage Service Details Headline',
      serviceDetailsSubMsg: 'Homepage Service Details SubMsg',
      contactHeadline: 'Homepage Contact Headline',
      contactSubMsg: 'Homepage Contact SubMsg',
      _id: '1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should...', async(async() => {
    const element = fixture.nativeElement;

    const homepage = homepageStub.get();

    await fixture.whenStable();
    fixture.detectChanges();

    homepage.subscribe((data) => {
      expect(data[0].headline).toBe('Homepage Headline');
    });
  }));
  */

  it('should display an About headline and sub message', async(async() => {
    const element = fixture.nativeElement;

    const headline = element.querySelector('h1');
    expect(headline).not.toBeNull('You should have an `h1` element to display the About headline');
    expect(headline.textContent).toContain('Homepage About Headline');

    const submessage = element.querySelector('p');
    expect(submessage).not.toBeNull('You should have a `p` element to display the About submessage');
    expect(submessage.textContent).toContain('Homepage About SubMsg');
  }));

  /*
  it('should display an About headline and sub message', () => {
    // const fixture = TestBed.createComponent(BannerComponent);
    const element = fixture.nativeElement;

    const title = element.querySelector('h1');
    expect(title).not.toBeNull('You should have an `h1` element to display the About headline');
    // expect(title.textContent).toContain('Hair Styling is a Must Try Fashion for All Occasions');

    const subtitle = element.querySelector('p');
    expect(subtitle).not.toBeNull('You should have a `p` element to display the About submessage');
    // expect(subtitle.textContent).toContain('At All About Hair, we provide custom salon care at an affordable price.');
  });
  */

  it('should have an About side image', () => {
    const element = fixture.nativeElement;

    /*
    // const imageWait = async selector => {
    async (async() => {
      while (!document.querySelector('img[class="image"]')) {
        await new Promise(r => setTimeout(r, 500));
      }
      // now the element is loaded

      const image = element.querySelector('img[class="image"]');
      expect(image).not.toBeNull('You should have an About side image');
      expect(image.getAttribute('src')).toBe('homepage.aboutImage', 'The `src` attribute of the image is not correct');
    });
    */

    const image = element.querySelector('img[class="image"]');
    expect(image).not.toBeNull('You should have an About side image');
    expect(image.getAttribute('src')).toBe('../../../assets/images/about-img.jpg', 'The `src` attribute of the image is not correct');
  });

  it('should have an About video link', () => {
    const element = fixture.nativeElement;

    /*
    // const imageWait = async selector => {
    async(async() => {
      while (!document.querySelector('img[class="play"]')) {
        await new Promise(r => setTimeout(r, 500));
      }
      // now the element is loaded
      const image = element.querySelector('img[class="play"]');
      expect(image).not.toBeNull('You should have an About video link image');
      expect(image.getAttribute('src')).toBe('assets/images/play.png', 'The `src` attribute of the image is not correct');
    });
    */
    const image = element.querySelector('img[class="play"]');
    expect(image).not.toBeNull('You should have an About video link image');
    expect(image.getAttribute('src')).toBe('assets/images/play.png', 'The `src` attribute of the image is not correct');

    const videoLink = element.querySelector('div.overlay > a');
    expect(videoLink).not.toBeNull('You should have a video link');
    expect(videoLink.getAttribute('href')).toBe('Homepage About Video Link', 'The About section video link is not correct');
  });

  it('should have homepage About details initialised and ready for viewing', () => {
    const element = fixture.nativeElement;

    expect(element.homepage).not.toBeNull('Homepage details should not be null');
  });
});
