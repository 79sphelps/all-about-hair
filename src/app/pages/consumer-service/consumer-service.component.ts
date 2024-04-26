import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';

import { Service } from '../../core/models/service';
import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-consumer-service',
  templateUrl: './consumer-service.component.html',
  styleUrls: ['./consumer-service.component.scss']
})
export class ConsumerServiceComponent implements OnInit, OnDestroy {
  pageTitle = 'Service Details';

  servicesSub: Subscription;
  service: Service;

  loading: boolean;
  error: boolean;
  query = '';

  private _id: string;
  routeSub: Subscription;

  constructor(private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params['id'];
      this._getServiceDetails();
    });
  }

  private _getServiceDetails() {
    this.loading = true;
    // Get future, public events
    this.servicesSub = this.api.getServiceDetailsById$(this._id).subscribe(
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

  /* NOT BEING USED
  changeRoute(url) {
    this.router.navigateByUrl('/', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(url));
  }
  */

  ngOnDestroy() {
     this.servicesSub.unsubscribe();
  }
}
