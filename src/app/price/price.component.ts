import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { UtilsService } from '../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage';
import { Service } from '../core/models/service';

@Component({
  selector: 'app-price',
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.scss"]
})
export class PriceComponent implements OnInit, OnDestroy {
  /*
  product_1 = {
    title: "Haircut & Style",
    price: "(See Below)",
    subtxt: "Custom cuts use same pricing scale",
    quote: "(none)",
    features: [
      "Women's $40-70",
      "Men's $30-60",
      "Children (under 12) $25-$55",
      "Neck Trim $15",
      "Bang Trim $10",
      "Wash & Style $25-$55"
    ]
  };

  product_2 = {
    title: "Special Occasion & Treatments",
    price: "(See Below)",
    subtxt:
      "A repair treatment or a revitalizing moisture treatment will leave your hair healthy, shiny & improved by up to 86%",
    quote: "(none)",
    features: [
      "Treatment Added (Shampoo & blow-dry included) $30",
      "Glossing Shine Treatment $55",
      "Thermal Style $40-$60",
      "Updo $45-$75",
      "Wedding Trial & Updo $130+"
    ]
  };

  product_3 = {
    title: "Hair Coloring",
    price: "(See Below)",
    subtxt:
      "AVEDA Full Spectrum Color immerses hair in 97% naturally derived formulas for our Permanent Color & 99% naturally derived formulas for our Deposit-Only Demi-Permanent Color.",
    quote: "(none)",
    features: [
      "Consultation free",
      "Full Foil $135+",
      "Partial Foil $115+",
      "Balayage or Ombre $140+",
      "Express Foil (~10 foils) $55+",
      "Root Color & Foil $140+",
      "All Over Color & Foil $160+",
      "All Over Lightening (bleach) $105+",
      "Bleach Retouch $90",
      "All Over Color $85+",
      "Root Touch Up $65",
      "Each Additional Bowl of Color $20"
    ]
  };

  product_4 = {
    title: "Lash Extensions",
    price: "(See Below)",
    subtxt:
      "Xtreme Lashes Eyelash Extensions are your ultimate answer for longer, thicker, more beautiful looking eyelashes.",
    quote: "(none)",
    features: ["Full Set $200", "Lash Fill $60-$95", "Lash Removal $30-$50"]
  };

  product_5 = {
    title: "Hair Extensions",
    price: "(See Below)",
    subtxt:
      "VoMor Hair Extensions not only add length, but also add volume & fullness. VoMor Extensions are made of high quality Remy hair, collected & manufactured in a humane manner, packaged according to environmental guidelines, and are tape-in & reusable. VoMor Extensions are safe & do not damage the hair.",
    quote: "Lengths are available in 12', 16' & 20'",
    features: ["Fashion Colors (2 ext) $90", "6-8 Week Maintenance $83-$415"]
  };

  product_6 = {
    title: "Semi-Permanent Smoothout Service",
    price: "(See Below)",
    subtxt:
      "Perfection SmoothOut is a FORMALDEHYDE FREE, nano amino acid complex that safely transforms the internal textural memory of the hair fiber to a smoother, frizz-free, more manageable state that lasts for up to 8-12 weeks. Most clients will experience up to a 70% reduction in daily styling time!",
    quote: "(none)",
    features: [
      "Short Hair to Medium Length $95-$125",
      "Long Hair (below collar bone) $125-$150"
    ]
  };

  product_7 = {
    title: "Waxing",
    price: "(See Below)",
    subtxt:
      "At least 3 weeks of growth is recommend for a waxing service. You may be asked to reschedule if the hair length is insufficient in order to effectively perform the service.",
    quote:
      "Some waxing services can be performed while a color service is processing. Mention your waxing needs when booking & we will accommodate you the best we can.",
    features: [
      "Brow Shaping $20",
      "Lip $10",
      "Chin $10",
      "Face (forehead, cheeks, chin) $30",
      "Nose $10",
      "Underarm $30",
      "1/2 Arm $30",
      "Full Arm $40",
      "1/2 Leg $40",
      "Full Leg $60"
    ]
  };

  productList = [
    this.product_1,
    this.product_2,
    this.product_3,
    this.product_4,
    this.product_5,
    this.product_6,
    this.product_7
  ];
  */

 pageTitle = 'Services and Pricing';

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
