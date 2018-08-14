import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../core/api.service';
import { UtilsService } from './../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage';
import { Personel } from '../core/models/personel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  /*
  stylist_1 = {
    name: 'Ana Nguyen',
    photo: '',
    role: 'Owner/Senior Stylist/Vomor Extension Certified Stylist',
    bio:
      'Ana has been in the salon industry since 2002 & has been an Aveda stylist since 2005. She enjoys helping each client find their perfect look, whether that be the right cut for their hair type, current hair color trends, or getting through a challenge that client is having with their hair. She focuses on working with the behavior of the hair, so each client can style their hair with ease. Verst in Aveda color, she takes full advantage of the creativity within the color line to give each client the look they desire. She brings Salon Fuss to Happy Valley with a focus on friendly customer service, employee respect and fulfillment, and offering Aveda products that she both loves and believes in.'
  };

  stylist_2 = {
    name: 'Ethel Davis',
    photo: 'assets/img/img_5.jpg',
    role:
      'Senior Stylist/Xtreme Lash Stylist/Vomor Extension Certified Stylist',
    bio:
      'Ethel has been in the hair & beauty industry professionally since 2009 and has been and Aveda stylist since 2011. His range of ability is very wide, from needs of fine hair to the complexities of dense curly hair. He's passionate about continuing education & loves to create soft blended layers, short textured pixie cuts, multidimensional color, beautiful blondes, and hair painting techniques such as balayage. '
  };

  stylist_3 = {
    name: 'Rodney Cooper',
    photo: 'assets/img/img_7.jpg',
    role: 'Senior Stylist/Aveda Color Specialist',
    bio:
      'Rodney began specializing in color education after joining one of Aveda's New York City salons in 2000. There he became a Certified Hair Color instructor and color support educator for the Advanced Academy of North America. In 2014, Rodney was named Technical Director of Color Training for Aveda Corporate's Soho location. His work has been featured in many Aveda creative displays, events, and ad campaigns. As a Hair Color Magic instructor, Rodney travels most weekends, bringing over 20 yrs of experience to Aveda salons around the US. In the fall of 2016, he relocated to the Portland area. Rodney is thrilled to bring his knowledge, passion & creativity to the Salon Fuss team.  '
  };

  stylist_4 = {
    name: 'Dora Walker',
    photo: 'assets/img/person_1.jpg',
    role:
      'Stylist/Xtreme Lash Certified Stylist/Vomor Extension Certified Stylist',
    bio:
      'Dora has been in the beauty industry since 2014 & has been an Aveda stylist from the start. She has a talent for precision and a knack for listening to a client's needs. Her natural talent and advanced training has given her the tools to be consistent & up to date on the latest trends. Her calm persona puts anyone at easy.'
  };

  stylist_5 = {
    name: 'Aron Hart',
    photo: 'assets/img/person_4.jpg',
    role: 'Stylist',
    bio:
      'Aron is a graduate of Aveda Institute Portland & has been a professional stylist since 2015. He specializes in men's haircutting, blonding & foiling techniques, gives the perfect blend & texture to each haircut. His welcoming personality will put you at easy while giving you the perfect style.'
  };
  */



  pageTitle = 'Stylist Team';

  homepageSub: Subscription;
  homepage: Homepage;

  personelListSub: Subscription;
  personelList: Personel[];
  // imageList = ['assets/images/brazil.png', 'assets/images/datsun.png', 'assets/images/skydive.png'];

  loading: boolean;
  error: boolean;
  query: '';


  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
    this._getPersonelList();
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

  private _getPersonelList() {
    this.loading = true;
    // Get future, public events
    this.personelListSub = this.api
      .getPersonel$()
      .subscribe(
        res => {
          this.personelList = res;
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
    this.personelListSub.unsubscribe();
  }


}
