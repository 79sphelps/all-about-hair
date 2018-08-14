import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { UtilsService } from '../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage';
import { Service } from '../core/models/service';

@Component({
  selector: 'app-services-public',
  templateUrl: './services-public.component.html',
  styleUrls: ['./services-public.component.scss']
})
export class ServicesPublicComponent implements OnInit, OnDestroy {
  /*
  service_1 = 'Haircut & Style';
  service_1_description = 'Enjoy a relaxing head, neck & shoulder massage, shampoo & style'
  service_1_image = 'assets/images/haircut_utensils.webp';

  service_2 = 'Hair Coloring';
  service_2_description = 'AVEDA Full Spectrum Color immerses hair in 97% naturally derived formulas for our Permanent Color & 99% naturally derived formulas for our Deposit-Only Demi-Permanent Color. (A Gloss/Toner is included in all Foil, Double Process, All Over Bleach, Balayage & Ombre services. A Gloss/Toner can be added to a Root Touch Up, if appropriate, for an additional price.)';
  service_2_image = 'assets/images/red_hair.webp';

  service_3 = 'Special Occasions & Treatments';
  service_3_description = 'A repair treatment or a revitalizing moisture treatment will leave your hair healthy, shiny & improved by up to 86%.';
  service_3_image = 'assets/images/girl_w_flower.webp';

  service_4 = 'Lash Extensions';
  service_4_description = 'Xtreme Lashes Eyelash Extensions are your ultimate answer for longer, thicker, more beautiful looking eyelashes.';
  service_4_image = 'assets/images/eyelash.png';

  service_5 = 'Waxing';
  service_5_description = 'At least 3 weeks of growth is recommend for a waxing service. You may be asked to reschedule if the hair length is insufficient in order to effectively perform the service.';
  service_5_image = 'assets/images/waxing2.webp';

  service_6 = 'Hair Extensions & Smoothing Service';
  service_6_description = 'VoMor Hair Extensions not only add length, but also add volume & fullness. VoMor Extensions are made of high quality Remy hair, collected & manufactured in a humane manner, packaged according to environmental guidelines, and are tape-in & reusable. VoMor Extensions are safe & do not damage the hair.';
  service_6_image = 'assets/images/hair_extensions.webp';
  */

 pageTitle = 'Services';

 homepageSub: Subscription;
 homepage: Homepage;
 servicesSub: Subscription;
 services: Service[];

 loading: boolean;
 error: boolean;
 query = '';

 constructor(
   private title: Title,
   public utils: UtilsService,
   private api: ApiService
 ) {}

 ngOnInit() {
   this.title.setTitle(this.pageTitle);
   this._getHomepageDetails();
   this._getServicesDetails();
 }

 private _getHomepageDetails() {
   this.loading = true;
   // Get future, public events
   this.homepageSub = this.api.getHomepageDetails$().subscribe(
     res => {
       this.homepage = res[0];
       this.loading = false;
     },
     err => {
       console.error(err);
       this.loading = false;
       this.error = true;
     }
   );
 }

 private _getServicesDetails() {
  this.loading = true;
  // Get future, public events
  this.servicesSub = this.api.getServices$().subscribe(
    res => {
      this.services = res;
      this.loading = false;
    },
    err => {
      console.error(err);
      this.loading = false;
      this.error = true;
    }
  );
}

 ngOnDestroy() {
   this.homepageSub.unsubscribe();
   this.servicesSub.unsubscribe();
 }
}
