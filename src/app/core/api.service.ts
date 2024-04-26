// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import { ENV } from './env.config';

import { Homepage } from './models/homepage';
import { Personel } from './models/personel';
import { Service } from './models/service';
import { Gallery } from './models/gallery';
import { Contact } from './models/contact';
import { Request } from './models/request';
import { Appointment } from './models/appointment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    // return Observable.throw(errorMsg);
    return throwError(errorMsg)
  }

  // ---------------------------------------------------------------------
  // GET list of public homepage details
  getHomepageDetails$(): Observable<Homepage> {
    return this.http
      .get(`${ENV.BASE_API}admin/homepage`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an homepage by ID (login required)
  getHomepageDetailsById$(id: string): Observable<Homepage> {
    return this.http
      .get(`${ENV.BASE_API}admin/homepage/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing homepage (admin only)
  editHomepage$(id: string, homepage: Homepage): Observable<Homepage> {
    return this.http
      .put(`${ENV.BASE_API}admin/homepage/update/${id}`, homepage, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of footer details
  getFooterInfo$(): Observable<Contact> {
    return this.http
      .get(`${ENV.BASE_API}admin/footerAbout`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of public contact details
  getContactInfo$(): Observable<Contact> {
    return this.http
      .get(`${ENV.BASE_API}admin/contact`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an contact by ID (login required)
  getContactInfoById$(id: string): Observable<Contact> {
    return this.http
      .get(`${ENV.BASE_API}admin/contact/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing contact (admin only)
  editContactInfo$(id: string, contact: Contact): Observable<Contact> {
    return this.http
      .put(`${ENV.BASE_API}admin/contact/update/${id}`, contact, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of public service details
  getServices$(): Observable<Service[]> {
    return this.http
      .get(`${ENV.BASE_API}admin/services`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an service by ID (login required)
  /*
  getServiceDetailsById$(id: string): Observable<Service> {
    return this.http
      .get(`${ENV.BASE_API}admin/services/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }
  */
  getServiceDetailsById$(id: string): Observable<Service> {
    return this.http
      .get(`${ENV.BASE_API}admin/services/${id}`)
      .pipe(catchError(error => this._handleError(error)));
  }


  // POST new service (admin only)
  postService$(service: Service): Observable<Service> {
    delete service._id;

    return this.http
      .post(`${ENV.BASE_API}admin/services/new`, service, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing service (admin only)
  editService$(id: string, service: Service): Observable<Service> {
    return this.http
      .put(`${ENV.BASE_API}admin/services/update/${id}`, service, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // DELETE existing service (admin only)
  deleteService$(id: string): Observable<any> {
   return this.http
    .delete(`${ENV.BASE_API}admin/services/${id}`, {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    })
    .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of public gallery details
  getGallery$(): Observable<Gallery[]> {
    return this.http
      .get(`${ENV.BASE_API}admin/gallery`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an photo by ID (login required)
  getGalleryPhotoById$(id: string): Observable<Gallery> {
    return this.http
      .get(`${ENV.BASE_API}admin/gallery/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // POST new gallery photo (admin only)
  postGalleryPhoto$(photo: Gallery): Observable<Gallery> {
    delete photo._id;

    return this.http
      .post(`${ENV.BASE_API}admin/gallery/new`, photo, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing gallery photos (admin only)
  editGalleryPhoto$(id: string, photo: Gallery): Observable<Gallery> {
    return this.http
      .put(`${ENV.BASE_API}admin/gallery/update/${id}`, photo, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // DELETE existing gallery photo (admin only)
  deleteGalleryPhoto$(id: string): Observable<any> {
   return this.http
    .delete(`${ENV.BASE_API}admin/gallery/${id}`, {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    })
    .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of personel
  getPersonel$(): Observable<Personel[]> {
    return this.http
      .get(`${ENV.BASE_API}admin/personel`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an personel by ID (login required)
  getPersonelById$(id: string): Observable<Personel> {
    return this.http
      .get(`${ENV.BASE_API}admin/personel/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // POST new personel (admin only)
  postPersonel$(personel: Personel): Observable<Personel> {
    delete personel._id;

    return this.http
      .post(`${ENV.BASE_API}admin/personel/new`, personel, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing personel (admin only)
  editPersonel$(id: string, personel: Personel): Observable<Personel> {
    return this.http
      .put(`${ENV.BASE_API}admin/personel/update/${id}`, personel, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // DELETE existing personel (admin only)
  deletePersonel$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}admin/personel/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // ---------------------------------------------------------------------
  // GET list of requests
  getRequests$(): Observable<Request[]> {
    return this.http
      .get(`${ENV.BASE_API}admin/requests`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an personel by ID (login required)
  getRequestById$(id: string): Observable<Request> {
    return this.http
      .get(`${ENV.BASE_API}admin/requests/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // POST new personel (admin only)
  postRequest$(request: Request): Observable<Request> {
    delete request._id;

    return this.http
      .post(`${ENV.BASE_API}requests/new`, request, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing personel (admin only)
  editRequest$(id: string, request: Request): Observable<Request> {
    return this.http
      .put(`${ENV.BASE_API}admin/requests/update/${id}`, request, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // DELETE existing personel (admin only)
  deleteRequest$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}admin/requests/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

// ---------------------------------------------------------------------
  // GET list of requests
  getAppointments$(): Observable<Appointment[]> {
    return this.http
      .get(`${ENV.BASE_API}admin/appointments`)
      .pipe(catchError(error => this._handleError(error)));
  }

  // GET an personel by ID (login required)
  getAppointmentById$(id: string): Observable<Appointment> {
    return this.http
      .get(`${ENV.BASE_API}admin/appointments/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // POST new personel (admin only)
  postAppointment$(appt: Appointment): Observable<Appointment> {
    delete appt._id;

    return this.http
      .post(`${ENV.BASE_API}appointments/new`, appt, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // PUT existing personel (admin only)
  editAppointment$(id: string, appt: Appointment): Observable<Appointment> {
    return this.http
      .put(`${ENV.BASE_API}admin/appointments/update/${id}`, appt, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }

  // DELETE existing personel (admin only)
  deleteAppointment$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}admin/appointments/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(catchError(error => this._handleError(error)));
  }
}
