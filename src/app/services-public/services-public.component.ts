import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { UtilsService } from '../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage';
import { Service } from '../core/models/service';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-public',
  templateUrl: './services-public.component.html',
  styleUrls: ['./services-public.component.scss']
})
export class ServicesPublicComponent implements OnInit, OnDestroy {
 pageTitle = 'Services';

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
   private api: ApiService
 ) {
 }

 ngOnInit() {
   this.title.setTitle(this.pageTitle);
   this._getHomepageDetails();
   this._getServicesDetails();
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
