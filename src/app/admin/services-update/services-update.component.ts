import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Service } from './../../core/models/service';

@Component({
  selector: 'app-services-update',
  templateUrl: './services-update.component.html',
  styleUrls: ['./services-update.component.scss']
})
export class ServicesUpdateComponent implements OnInit, OnDestroy {
  pageTitle = 'Update Service';
  routeSub: Subscription;
  serviceSub: Subscription;
  service: Service;
  loading: boolean;
  error: boolean;
  private _id: string;

  tabSub: Subscription;
  tab: string;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);

    // Set service ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params['id'];
      this._getservice();
    });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams.subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'edit';
    });
  }

  private _getservice() {
    this.loading = true;
    // GET service by ID
    this.serviceSub = this.api.getServiceDetailsById$(this._id).subscribe(
      res => {
        this.service = res;
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
    this.routeSub.unsubscribe();
    this.serviceSub.unsubscribe();
    this.tabSub.unsubscribe();
  }
}
