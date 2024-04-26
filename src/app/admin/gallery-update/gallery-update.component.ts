import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Gallery } from './../../core/models/gallery';

@Component({
  selector: 'app-gallery-update',
  templateUrl: './gallery-update.component.html',
  styleUrls: ['./gallery-update.component.scss']
})
export class GalleryUpdateComponent implements OnInit, OnDestroy {
  pageTitle = 'Update Gallery';
  routeSub: Subscription;
  gallerySub: Subscription;
  gallery: Gallery;
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

    // Set photo ID from route params and subscribe
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
    // GET photo by ID
    this.gallerySub = this.api.getGalleryPhotoById$(this._id).subscribe(
      res => {
        this.gallery = res;
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
    this.gallerySub.unsubscribe();
    this.tabSub.unsubscribe();
  }
}
