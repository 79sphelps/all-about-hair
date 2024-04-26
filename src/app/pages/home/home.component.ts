import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs'
import { Footer } from '../../core/models/footer';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'All About Hair';

  footerSub: Subscription;
  footer: Footer;

  loading: boolean;
  error: boolean;
  query = '';

  footerInfoLoaded: Promise<boolean>;

  constructor(private title: Title, private api: ApiService) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.loadScript('../../../assets/js/main.js');
    this._getFooterDetails();
  }


  private _getFooterDetails() {
    this.loading = true;
    // Get future, public events
    this.footerSub = this.api.getFooterInfo$().subscribe(
      res => {
        this.footer = res[0];
        console.log('----- footer ----')
        console.log(this.footer)
        this.loading = false;
        this.footerInfoLoaded = Promise.resolve(true);
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
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
