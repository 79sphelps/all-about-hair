import { Component, OnInit, Output, AfterViewInit, EventEmitter } from '@angular/core';
//import { FooterService } from '../../footer/footer.service';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})
export class GallerySectionComponent implements OnInit {

  constructor(
    //private _footerService: FooterService
    ) { }

  ngOnInit() {
    this.loadScript("../../../assets/js/transferred/jquery.stellar.min.js");
    this.loadScript("../../../assets/js/transferred/main.js");
    //this._footerService.setLoaded(true);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
