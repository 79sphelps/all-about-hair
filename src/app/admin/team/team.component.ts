import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs'
import { Personel } from './../../core/models/personel';

import { expandCollapse } from './../../core/expand-collapse.animation';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [expandCollapse]
})
export class TeamComponent implements OnInit, OnDestroy {
  pageTitle = 'Team Members';
  teamSub: Subscription;
  teamList: Personel[];
  filteredTeam: Personel[];
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
    this._getTeamList();
  }

  private _getTeamList() {
    this.loading = true;

    // Get all (admin) events
    this.teamSub = this.api.getPersonel$().subscribe(
      res => {
        this.teamList = res;
        this.filteredTeam = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchTeam() {
    this.filteredTeam = this.fs.search(this.teamList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredTeam = this.teamList;
  }

  ngOnDestroy() {
    this.teamSub.unsubscribe();
  }
}
