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
import { UtilsService } from '../../core/utils.service';
import { ServicesSliderComponent } from './services-slider.component';



describe('ServicesSliderComponent', () => {
  let component: ServicesSliderComponent;
  let fixture: ComponentFixture<ServicesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSliderComponent ],
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,   // **This was super important to add
      ],
      providers: [ ApiService, AuthService, UtilsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let jQuery = require('jquery');
    fixture = TestBed.createComponent(ServicesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
