import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { HomepageDetailsComponent } from './admin/homepage-details/homepage-details.component';
import { HomepageUpdateComponent } from './admin/homepage-update/homepage-update.component';

import { ServiceComponent } from './admin/service/service.component';
import { ServicesComponent } from './admin/services/services.component';
import { ServicesNewComponent } from './admin/services-new/services-new.component';
import { ServicesUpdateComponent } from './admin/services-update/services-update.component';

import { GalleryPhotoComponent } from './admin/gallery-photo/gallery-photo.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { GalleryNewComponent } from './admin/gallery-new/gallery-new.component';
import { GalleryUpdateComponent } from './admin/gallery-update/gallery-update.component';

import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'homepage',
        component: HomepageDetailsComponent
      },
      {
        path: 'homepage/update/:id',
        component: HomepageUpdateComponent
      },
      {
        path: 'homepage/:id',
        component: HomepageDetailsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'services/new',
        component: ServicesNewComponent
      },
      {
        path: 'services/update/:id',
        component: ServicesUpdateComponent
      },
      {
        path: 'services/:id',
        component: ServiceComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'gallery/new',
        component: GalleryNewComponent
      },
      {
        path: 'gallery/update/:id',
        component: GalleryUpdateComponent
      },
      {
        path: 'gallery/:id',
        component: GalleryPhotoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule { }