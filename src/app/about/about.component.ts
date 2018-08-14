import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutMsg = `All About Hair is an Aveda Exclusive Salon with a mission
              to provide an upscale experience with a friendly, neighborhood feeling.
              Stylists have been chosen based on talent, passion, personality & commitment.
              Ongoing training & support will assure each guest receives the utmost enjoyable
              experience, along with a personally tailored look that fits their expectations.`;

  constructor() { }

  ngOnInit() {
  }

}
