import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilsService } from './../../core/utils.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  pageTitle = 'Calendar';
  loading: boolean;

  constructor(
    private title: Title,
    public utils: UtilsService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }
}
