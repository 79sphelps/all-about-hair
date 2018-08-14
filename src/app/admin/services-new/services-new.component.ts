import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-new',
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.scss']
})
export class ServicesNewComponent implements OnInit {
  pageTitle = 'Add Service';

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }
}
