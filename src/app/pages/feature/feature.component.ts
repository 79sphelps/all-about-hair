import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  owner = 'Ana';
  personalQuote = `Let the beauty of what you love be what you do`;

  constructor() {}

  ngOnInit() {}
}
