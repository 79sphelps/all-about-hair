import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs'
import { Request } from './../../core/models/request';
import { expandCollapse } from './../../core/expand-collapse.animation';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  animations: [expandCollapse]
})
export class RequestsComponent implements OnInit, OnDestroy {
  pageTitle = 'User Requests';
  requestsSub: Subscription;
  requestList: Request[];
  filteredRequests: Request[];
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
    this._getRequestsList();
  }

  private _getRequestsList() {
    this.loading = true;

    // Get all (admin) requests
    this.requestsSub = this.api.getRequests$().subscribe(
      res => {
        this.requestList = res;
        this.filteredRequests = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchRequests() {
    this.filteredRequests = this.fs.search(this.requestList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredRequests = this.requestList;
  }

  ngOnDestroy() {
    this.requestsSub.unsubscribe();
  }
}
