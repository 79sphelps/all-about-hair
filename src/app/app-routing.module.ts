import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './pages/home/home.component';
import { HomepageDetailsComponent } from './admin/homepage-details/homepage-details.component';
import { HomepageUpdateComponent } from './admin/homepage-update/homepage-update.component';

import { ServiceComponent } from './admin/service/service.component';
import { ServicesComponent } from './admin/services/services.component';
import { ServicesNewComponent } from './admin/services-new/services-new.component';
import { ServicesUpdateComponent } from './admin/services-update/services-update.component';

import { ConsumerServiceComponent } from './pages/consumer-service/consumer-service.component';

import { GalleryPhotoComponent } from './admin/gallery-photo/gallery-photo.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { GalleryNewComponent } from './admin/gallery-new/gallery-new.component';
import { GalleryUpdateComponent } from './admin/gallery-update/gallery-update.component';

import { TeamComponent } from './admin/team/team.component';
import { TeamMemberComponent } from './admin/team-member/team-member.component';
import { TeamNewComponent } from './admin/team-new/team-new.component';
import { TeamUpdateComponent } from './admin/team-update/team-update.component';

import { RequestsComponent } from './admin/requests/requests.component';
import { RequestComponent } from './admin/request/request.component';
import { RequestNewComponent } from './admin/request-new/request-new.component';
import { RequestUpdateComponent } from './admin/request-update/request-update.component';

import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { AppointmentComponent } from './admin/appointment/appointment.component';
import { AppointmentsNewComponent } from './admin/appointments-new/appointments-new.component';
import { AppointmentsUpdateComponent } from './admin/appointments-update/appointments-update.component';

import { CalendarComponent } from './pages/calendar/calendar.component';

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
    path: 'requests/new',
    component: RequestNewComponent
  },
  {
    path: 'appointments/new',
    component: AppointmentsNewComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'consumer-services/:id',
    component: ConsumerServiceComponent
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
      },
      {
        path: 'personel',
        component: TeamComponent
      },
      {
        path: 'personel/new',
        component: TeamNewComponent
      },
      {
        path: 'personel/update/:id',
        component: TeamUpdateComponent
      },
      {
        path: 'personel/:id',
        component: TeamMemberComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'requests/update/:id',
        component: RequestUpdateComponent
      },
      {
        path: 'requests/:id',
        component: RequestComponent
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'appointments/update/:id',
        component: AppointmentsUpdateComponent
      },
      {
        path: 'appointments/delete/:id',
        component: AppointmentsUpdateComponent
      },
      {
        path: 'appointments/:id',
        component: AppointmentComponent
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
