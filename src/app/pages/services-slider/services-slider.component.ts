import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { Subscription } from 'rxjs'

import { Homepage } from '../../core/models/homepage';
import { Service } from '../../core/models/service';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-services-slider',
  templateUrl: './services-slider.component.html',
  styleUrls: ['./services-slider.component.css']
})
export class ServicesSliderComponent implements OnInit, OnDestroy {
  pageTitle = 'Services and Pricing';

  homepageSub: Subscription;
  homepage: Homepage;
  servicesSub: Subscription;
  services: Service[];

  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
    this._getServicesDetails();
    this.loadScript('../../../assets/js/owl.carousel.min.js');
    this.loadScript('../../../assets/js/transferred/home-slider.js');
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(../../${image})`);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  private _getHomepageDetails() {
    this.loading = true;
    // Get future, public events
    this.homepageSub = this.api.getHomepageDetails$().subscribe(
      res => {
        this.homepage = res[0];
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  private _getServicesDetails() {
   this.loading = true;
   // Get future, public events
   this.servicesSub = this.api.getServices$().subscribe(
     res => {
       this.services = res;
       this.loading = false;
     },
     err => {
       console.error(err);
       this.loading = false;
       this.error = true;
     }
   );
 }

  ngOnDestroy() {
    this.homepageSub.unsubscribe();
    this.servicesSub.unsubscribe();
  }
}
