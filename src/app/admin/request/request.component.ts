import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Request } from '../../core/models/request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit, OnDestroy {
  pageTitle: string;
  id: string;
  loggedInSub: Subscription;
  routeSub: Subscription;
  tabSub: Subscription;
  requestSub: Subscription;
  request: Request;
  loading: boolean;
  error: boolean;
  tab: string;
  requestPast: boolean;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title
  ) {}

  ngOnInit() {
    this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => {
      this.loading = true;
      if (loggedIn) {
        this._routeSubs();
      }
    });
  }

  private _routeSubs() {
    // Set request ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this._getService();
    });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams.subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'details';
    });
  }

  private _getService() {
    this.loading = true;
    // GET request by ID
    this.requestSub = this.api.getRequestById$(this.id).subscribe(
      res => {
        this.request = res;
        this._setPageTitle(this.request.name);
        this.loading = false;
        // this.requestPast = this.utils.requestPast(this.request.endDatetime);
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
        this._setPageTitle('Service Details');
      }
    );
  }

  private _setPageTitle(title: string) {
    this.pageTitle = title;
    this.title.setTitle(title);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.tabSub.unsubscribe();
    this.requestSub.unsubscribe();
  }
}
