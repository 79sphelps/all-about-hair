import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Personel } from './../../core/models/personel';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.scss']
})
export class TeamUpdateComponent implements OnInit, OnDestroy {
  pageTitle = 'Update Team';
  routeSub: Subscription;
  memberSub: Subscription;
  member: Personel;
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

    // Set member ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params['id'];
      this._getPhoto();
    });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams.subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'edit';
    });
  }

  private _getPhoto() {
    this.loading = true;
    // GET member by ID
    this.memberSub = this.api.getPersonelById$(this._id).subscribe(
      res => {
        this.member = res;
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
    this.memberSub.unsubscribe();
    this.tabSub.unsubscribe();
  }
}
