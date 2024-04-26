import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Appointment } from './../../core/models/appointment';

@Component({
  selector: 'app-appointments-update',
  templateUrl: './appointments-update.component.html',
  styleUrls: ['./appointments-update.component.scss']
})
export class AppointmentsUpdateComponent implements OnInit, OnDestroy {
  pageTitle = 'Update Appointment';
  routeSub: Subscription;
  appointmentSub: Subscription;
  appointment: Appointment;
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

    // Set appointment ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params['id'];
      this._getAppointment();
    });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams.subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'edit';
    });
  }

  private _getAppointment() {
    this.loading = true;
    // GET appointment by ID
    this.appointmentSub = this.api.getAppointmentById$(this._id).subscribe(
      res => {
        this.appointment = res;
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
    this.appointmentSub.unsubscribe();
    this.tabSub.unsubscribe();
  }
}
