import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs'
import { Appointment } from './../../core/models/appointment';
import { expandCollapse } from './../../core/expand-collapse.animation';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [expandCollapse]
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  pageTitle = 'User Appointments';
  appointmentsSub: Subscription;
  appointmentList: Appointment[];
  filteredAppointments: Appointment[];
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
    this._getAppointmentsList();
  }

  private _getAppointmentsList() {
    this.loading = true;

    // Get all (admin) events
    this.appointmentsSub = this.api.getAppointments$().subscribe(
      res => {
        this.appointmentList = res;
        this.filteredAppointments = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchAppointments() {
    this.filteredAppointments = this.fs.search(this.appointmentList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredAppointments = this.appointmentList;
  }

  ngOnDestroy() {
    this.appointmentsSub.unsubscribe();
  }
}
