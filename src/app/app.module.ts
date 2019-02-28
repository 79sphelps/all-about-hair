import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/home.component';
import { RootComponent } from './root/root.component';
// import { ServicesPublicComponent } from './pages/services-public/services-public.component';
// import { GalleryPublicComponent } from './pages/gallery-public/gallery-public.component';
// import { FeatureComponent } from './pages/feature/feature.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamPublicComponent } from './pages/team-public/team-public.component';
// import { PriceComponent } from './pages/price/price.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './pages/banner/banner.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

import { SpecialsComponent } from './pages/specials/specials.component';

import { CallbackComponent } from './pages/callback/callback.component';
import { HomepageDetailsComponent } from './admin/homepage-details/homepage-details.component';
import { HomepageFormComponent } from './admin/homepage-form/homepage-form.component';
import { HomepageUpdateComponent } from './admin/homepage-update/homepage-update.component';
import { AdminComponent } from './admin/admin.component';

// Core Modules
import { CoreModule } from './core/core.module';

// Auth Modules
import { AuthModule } from './auth/auth.module';

import { ServicesFormComponent } from './admin/services-form/services-form.component';
import { ServicesUpdateComponent } from './admin/services-update/services-update.component';
import { ServiceComponent } from './admin/service/service.component';
import { ServicesComponent } from './admin/services/services.component';
import { ServicesNewComponent } from './admin/services-new/services-new.component';
import { ServiceDetailComponent } from './admin/service/service-detail/service-detail.component';
import { DeleteServiceComponent } from './admin/services-update/delete-service/delete-service.component';

import { GalleryPhotoComponent } from './admin/gallery-photo/gallery-photo.component';
import { PhotoDetailComponent } from './admin/gallery-photo/photo-detail/photo-detail.component';
import { GalleryNewComponent } from './admin/gallery-new/gallery-new.component';
import { GalleryUpdateComponent } from './admin/gallery-update/gallery-update.component';
import { DeletePhotoComponent } from './admin/gallery-update/delete-photo/delete-photo.component';
import { GalleryFormComponent } from './admin/gallery-form/gallery-form.component';
import { GalleryComponent } from './admin/gallery/gallery.component';

import { TeamNewComponent } from './admin/team-new/team-new.component';
import { TeamMemberComponent } from './admin/team-member/team-member.component';
import { MemberDetailComponent } from './admin/team-member/member-detail/member-detail.component';
import { TeamUpdateComponent } from './admin/team-update/team-update.component';
import { DeleteMemberComponent } from './admin/team-update/delete-member/delete-member.component';
import { TeamFormComponent } from './admin/team-form/team-form.component';
import { TeamComponent } from './admin/team/team.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { RequestComponent } from './admin/request/request.component';
import { RequestDetailComponent } from './admin/request/request-detail/request-detail.component';
import { RequestNewComponent } from './admin/request-new/request-new.component';
import { RequestUpdateComponent } from './admin/request-update/request-update.component';
import { DeleteRequestComponent } from './admin/request-update/delete-request/delete-request.component';
import { RequestFormComponent } from './admin/request-form/request-form.component';

import { GoogleAnalyticsEventsService } from './google-analytics-events.service';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { AppointmentComponent } from './admin/appointment/appointment.component';
import { AppointmentFormComponent } from './admin/appointment-form/appointment-form.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { AppointmentsUpdateComponent } from './admin/appointments-update/appointments-update.component';
import { DeleteAppointmentComponent } from './admin/appointments-update/delete-appointment/delete-appointment.component';
import { AppointmentsNewComponent } from './admin/appointments-new/appointments-new.component';
import { AppointmentDetailComponent } from './admin/appointment/appointment-detail/appointment-detail.component';
// import { ServiceCarouselComponent } from './pages/service-carousel/service-carousel.component';

import { ServicesSliderComponent } from './pages/services-slider/services-slider.component';
import { GallerySectionComponent } from './pages/gallery-section/gallery-section.component';
import { ThreeColSection1Component } from './pages/three-col-section1/three-col-section1.component';

import { ClickOutsideDirective } from './header/click-outside.directive';
import { ConsumerServiceComponent } from './pages/consumer-service/consumer-service.component';

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    AboutComponent,
    TeamPublicComponent,
    ContactComponent,
    BannerComponent,
    SpecialsComponent,
    CallbackComponent,
    HomepageDetailsComponent,
    HomepageFormComponent,
    HomepageUpdateComponent,
    AdminComponent,
    ServicesComponent,
    ServicesFormComponent,
    ServicesUpdateComponent,
    ServiceComponent,
    ServicesNewComponent,
    ServiceDetailComponent,
    DeleteServiceComponent,
    GalleryPhotoComponent,
    PhotoDetailComponent,
    GalleryNewComponent,
    GalleryUpdateComponent,
    DeletePhotoComponent,
    GalleryFormComponent,
    GalleryComponent,
    TeamNewComponent,
    TeamMemberComponent,
    MemberDetailComponent,
    TeamUpdateComponent,
    DeleteMemberComponent,
    TeamFormComponent,
    TeamComponent,
    RequestsComponent,
    RequestComponent,
    RequestDetailComponent,
    RequestNewComponent,
    RequestUpdateComponent,
    DeleteRequestComponent,
    RequestFormComponent,
    CalendarComponent,
    AppointmentComponent,
    AppointmentFormComponent,
    AppointmentsComponent,
    AppointmentsUpdateComponent,
    DeleteAppointmentComponent,
    AppointmentsNewComponent,
    AppointmentDetailComponent,
    ServicesSliderComponent,
    GallerySectionComponent,
    ThreeColSection1Component,
    ClickOutsideDirective,
    ConsumerServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule.forRoot()
  ],
  providers: [Title, GoogleAnalyticsEventsService],
  bootstrap: [RootComponent]
})
export class AppModule {}
