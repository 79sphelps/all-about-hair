// src/app/pages/event/event.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Appointment } from '../../core/models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  pageTitle: string;
  id: string;
  loggedInSub: Subscription;
  routeSub: Subscription;
  tabSub: Subscription;
  appointmentSub: Subscription;
  appointment: Appointment;
  loading: boolean;
  error: boolean;
  tab: string;
  eventPast: boolean;

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
    // Set event ID from route params and subscribe
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
    // GET event by ID
    this.appointmentSub = this.api.getAppointmentById$(this.id).subscribe(
      res => {
        this.appointment = res;
        this._setPageTitle(this.appointment.name);
        this.loading = false;
        // this.eventPast = this.utils.eventPast(this.event.endDatetime);
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
        this._setPageTitle('Appointment Details');
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
    this.appointmentSub.unsubscribe();
  }
}
