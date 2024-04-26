import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs'
import { Service } from './../../core/models/service';

import { expandCollapse } from './../../core/expand-collapse.animation';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [expandCollapse]
})
export class ServicesComponent implements OnInit, OnDestroy {
  pageTitle = 'Services';
  servicesSub: Subscription;
  serviceList: Service[];
  filteredServices: Service[];
  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getServiceList();
  }

  private _getServiceList() {
    this.loading = true;

    // Get all (admin) services
    this.servicesSub = this.api.getServices$().subscribe(
      res => {
        this.serviceList = res;
        this.filteredServices = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchServices() {
    this.filteredServices = this.fs.search(this.serviceList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredServices = this.serviceList;
  }

  ngOnDestroy() {
    this.servicesSub.unsubscribe();
  }
}
