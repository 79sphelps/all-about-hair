import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { Subscription } from 'rxjs'
import { Homepage } from '../../core/models/homepage';
import { Contact } from '../../core/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  pageTitle = 'Contact Us';

  homepageSub: Subscription;
  homepage: Homepage;
  contactSub: Subscription;
  contact: Contact;

  loading: boolean;
  error: boolean;
  query = '';

  contactInfoLoaded: Promise<boolean>;

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
    this._getContactDetails();
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
  
  private _getContactDetails() {
    this.loading = true;
    // Get future, public events
    this.contactSub = this.api.getContactInfo$().subscribe(
      res => {
        this.contact = res[0];
        this.loading = false;
        this.contactInfoLoaded = Promise.resolve(true);
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
    this.contactSub.unsubscribe();
  }
}
