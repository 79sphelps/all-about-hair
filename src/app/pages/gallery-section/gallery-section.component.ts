import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})
export class GallerySectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('../../../assets/js/transferred/jquery.stellar.min.js');
    this.loadScript('../../../assets/js/transferred/main.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
