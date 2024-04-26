import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs'
import { Gallery } from './../../core/models/gallery';

import { expandCollapse } from './../../core/expand-collapse.animation';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [expandCollapse]
})
export class GalleryComponent implements OnInit, OnDestroy {
  pageTitle = 'Gallery';
  photosSub: Subscription;
  photoList: Gallery[];
  filteredPhotos: Gallery[];
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

    // Get all (admin) appointments
    this.photosSub = this.api.getGallery$().subscribe(
      res => {
        this.photoList = res;
        this.filteredPhotos = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchGallery() {
    this.filteredPhotos = this.fs.search(this.photoList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredPhotos = this.photoList;
  }

  ngOnDestroy() {
    this.photosSub.unsubscribe();
  }
}
