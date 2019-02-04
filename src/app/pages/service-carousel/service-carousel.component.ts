import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

// Don't forget to declare Global variable related to Swiper.
// declare var swiper: any;

@Component({
  selector: 'app-service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.scss']
})
export class ServiceCarouselComponent implements AfterViewInit {

  swiper: any;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
  /**
   * - Here you are 100% sure, html is present on DOM, Swiper is initialize and is able to find your DOM element.
   * - Swiper constructor accept DOMElement as parameter, i recommand this approch to optimize DOM parsing.
   * - Because you store Swiper instance as attribute, you will be able to control Swiper by javascript.
  **/
  this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
    // Here you can provide Swiper config
  });
}

}
