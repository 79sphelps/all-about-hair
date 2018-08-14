import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../core/api.service';
import { UtilsService } from './../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  /*
  company = 'All About Hair';
  bannerMsg = 'Hair Styling is a Must Try Fashion for All Occasions';
  bannerSubTxt = `At ${
    this.company
  }, we provide custom salon care at an affordable price.`;
  */

  pageTitle = 'Homepage';

  homepageSub: Subscription;
  homepage: Homepage;

  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
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

  ngOnDestroy() {
    this.homepageSub.unsubscribe();
  }
}
