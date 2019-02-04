import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {
  message = 'Selfie Promo';
  offer =
    `Wanna get $10 off your next service? Take a selfie in front of our selfie wall with #AllAboutHair
    & tag @allabouthair on your Instagram & Facebook! At the end of your service, show our front desk
    your much appreciated post & Voila!`;
  image = '';

  constructor() {}

  ngOnInit() {}
}
