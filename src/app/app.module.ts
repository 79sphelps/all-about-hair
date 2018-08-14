import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { ServicesPublicComponent } from './services-public/services-public.component';
import { GalleryPublicComponent } from './gallery-public/gallery-public.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

import { AppointmentComponent } from './appointment/appointment.component';
import { SpecialsComponent } from './specials/specials.component';

import { CallbackComponent } from './callback/callback.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootComponent,
    ServicesPublicComponent,
    GalleryPublicComponent,
    FeatureComponent,
    AboutComponent,
    TeamComponent,
    PriceComponent,
    ContactComponent,
    BannerComponent,
    AppointmentComponent,
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
    GalleryComponent
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
  providers: [Title],
  bootstrap: [RootComponent]
})
export class AppModule {}