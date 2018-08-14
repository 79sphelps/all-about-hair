import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-new',
  templateUrl: './gallery-new.component.html',
  styleUrls: ['./gallery-new.component.scss']
})
export class GalleryNewComponent implements OnInit {
  pageTitle = 'Add Photo';

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }
}
