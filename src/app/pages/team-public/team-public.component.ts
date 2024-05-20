import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { Subscription } from 'rxjs'
import { Homepage } from '../../core/models/homepage';
import { Personel } from '../../core/models/personel';

@Component({
  selector: 'app-team-public',
  templateUrl: './team-public.component.html',
  styleUrls: ['./team-public.component.scss', '../../../assets/scss/carousel.scss'],
})
export class TeamPublicComponent implements OnInit, OnDestroy {
  pageTitle = 'Stylist Team';

  homepageSub: Subscription;
  homepage: Homepage;

  personelListSub: Subscription;
  personelList: Personel[];

  loading: boolean;
  error: boolean;
  query: '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
    this._getPersonelList();
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

  private _getPersonelList() {
    this.loading = true;
    // Get future, public events
    this.personelListSub = this.api.getPersonel$().subscribe(
      res => {
        this.personelList = res;
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
    this.personelListSub.unsubscribe();
  }
}
