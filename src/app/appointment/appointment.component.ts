import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  message =
    'LET OUR GUEST SERVICES MATCH YOU TO THE PERFECT STYLIST> WE WILL BE IN TOUCH WITHIN 24HRS TO ACCOMMODATE YOUR REQUEST.';

  constructor() {}

  ngOnInit() {}
}
