import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { Appointment } from './models/appointment';
import { Homepage } from './models/homepage';
import { Contact } from './models/contact';
import { Gallery } from './models/gallery';
import { Personel } from './models/personel';
import { Request } from './models/request';
import { Service } from './models/service';

import { ApiService } from './api.service';
import { AuthService } from '../auth/auth.service';

describe('API HTTP Service Operations', () => {

  beforeEach(() => {
    // 0. set up the test environment
    TestBed.configureTestingModule({
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule   // **This was super important to add
      ],
      providers: [ ApiService, AuthService ]
    });
  });

  /*
  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    }
  ));
  */

  // ===================================================
  // Appointments HTTP Service Tests
  // ===================================================

  describe('Appointment HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockAppt: any;
    let mockNewAppt: Appointment;
    let mockUpdatedAppt: Appointment;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockAppt = {
        name: 'Test Name',
        email: 'Test Email',
        category: 'Test Category',
        message: 'Test Message',
        _id: '1'
      };

      mockNewAppt = new Appointment(
        'New Appt Name',
        'New Appt Email',
        'New Appt Category',
        'New Appt Message',
        '2'
      );

      mockUpdatedAppt = new Appointment(
        'Updated Appt Name',
        'Updated Appt Email',
        'Updated Appt Category',
        'Updated Appt Message',
        '2'
      );
    });

    it('should GET a list of appointments', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getAppointments$().subscribe((services) => {
        expect(services[0]).toEqual(mockAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockAppt]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET a single appointment by ID', () => {
      apiService.getAppointmentById$('1').subscribe((appt) => {
        expect(appt[0]).toEqual(mockAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments/1');
      request.flush([mockAppt]);
      httpTestingController.verify();
    });

    it('should POST a new appointment', () => {
      apiService.postAppointment$(mockNewAppt).subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockNewAppt);
      });

      const request = httpTestingController.expectOne('/api/appointments/new');
      request.flush([mockNewAppt]);
      httpTestingController.verify();
    });

    it('should UPDATE an appointment', () => {
      apiService.editAppointment$('1', mockUpdatedAppt).subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockUpdatedAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments/update/1');
      request.flush([mockUpdatedAppt]);
      httpTestingController.verify();
    });

    it('should DELETE an appointment', () => {
      apiService.deleteAppointment$('2').subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockUpdatedAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments/2');
      request.flush([mockUpdatedAppt]);
      httpTestingController.verify();
    });

  });

  // ===================================================
  // Homepage HTTP Service Tests
  // ===================================================

  describe('Homepage HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockHomepage: any;
    let mockUpdatedHomepage: Homepage;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockHomepage = {
        headline: 'Homepage Headline',
        headlineSubMsg: 'Homepage SubMsg',
        servicesHeadline: 'Homepage Services Headline',
        servicesSubMsg: 'Homepage Services SubMsg',
        aboutHeadline: 'Homepage About Headline',
        aboutSubMsg: 'Homepage About SubMsg',
        aboutImage: 'Homepage About Image',
        aboutVideoLink: 'Homepage About Video Link',
        stylistsHeadline: 'Homepage Stylists Headline',
        stylistsSubMsg: 'Homepage Stylists SugMsg',
        serviceDetailsHeadline: 'Homepage Service Details Headline',
        serviceDetailsSubMsg: 'Homepage Service Details SubMsg',
        contactHeadline: 'Homepage Contact Headline',
        contactSubMsg: 'Homepage Contact SubMsg',
        _id: '1'
      };

      mockUpdatedHomepage = new Homepage(
        'Homepage Headline',
        'Homepage SubMsg',
        'Homepage Services Headline',
        'Homepage Services SubMsg',
        'Homepage About Headline',
        'Homepage About SubMsg',
        'Homepage About Image',
        'Homepage About Video Link',
        'Homepage Stylists Headline',
        'Homepage Stylists SugMsg',
        'Homepage Service Details Headline',
        'Homepage Service Details SubMsg',
        'Homepage Contact Headline',
        'Homepage Contact SubMsg',
        '1'
      );
    });

    it('should GET homepage details', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getHomepageDetails$().subscribe((homepage) => {
        expect(homepage[0]).toEqual(mockHomepage);
      });

      const request = httpTestingController.expectOne('/api/admin/homepage');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockHomepage]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET homepage by ID', () => {
      apiService.getHomepageDetailsById$('1').subscribe((homepage) => {
        expect(homepage[0]).toEqual(mockHomepage);
      });

      const request = httpTestingController.expectOne('/api/admin/homepage/1');
      request.flush([mockHomepage]);
      httpTestingController.verify();
    });

    /*
    it('should POST a new appointment', () => {
      apiService.postAppointment$(mockNewAppt).subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockNewAppt);
      });

      const request = httpTestingController.expectOne('/api/appointments/new');
      request.flush([mockNewAppt]);
      httpTestingController.verify();
    });
    */

    it('should UPDATE a homepage', () => {
      apiService.editHomepage$('1', mockUpdatedHomepage).subscribe((homepage) => {
        expect(homepage[0]).toEqual(mockUpdatedHomepage);
      });

      const request = httpTestingController.expectOne('/api/admin/homepage/update/1');
      request.flush([mockUpdatedHomepage]);
      httpTestingController.verify();
    });

    /*
    it('should DELETE an appointment', () => {
      apiService.deleteAppointment$('2').subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockUpdatedAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments/2');
      request.flush([mockUpdatedAppt]);
      httpTestingController.verify();
    });
    */
  });


  // ===================================================
  // Contact HTTP Service Tests
  // ===================================================

  describe('Contact HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockContactInfo: any;
    let mockUpdatedContactInfo: Contact;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockContactInfo = {
        location: 'Test Location Name',
        phone: 'Test Phone',
        email: 'Test Email',
        hours: 'Test Hours',
        _id: '1'
      };

      mockUpdatedContactInfo = new Contact(
        'Updated Location',
        'Updated Phone',
        'Updated Email',
        'Updated Hours',
        '1'
      );
    });

    it('should GET contact information', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getContactInfo$().subscribe((contactInfo) => {
        expect(contactInfo[0]).toEqual(mockContactInfo);
      });

      const request = httpTestingController.expectOne('/api/admin/contact');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockContactInfo]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET the contact information document by ID', () => {
      apiService.getContactInfoById$('1').subscribe((contactInfo) => {
        expect(contactInfo[0]).toEqual(mockContactInfo);
      });

      const request = httpTestingController.expectOne('/api/admin/contact/1');
      request.flush([mockContactInfo]);
      httpTestingController.verify();
    });

    /*
    it('should POST a new appointment', () => {
      apiService.postAppointment$(mockNewAppt).subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockNewAppt);
      });

      const request = httpTestingController.expectOne('/api/appointments/new');
      request.flush([mockNewAppt]);
      httpTestingController.verify();
    });
    */

    it('should UPDATE the contact information', () => {
      apiService.editContactInfo$('1', mockUpdatedContactInfo).subscribe((contactInfo) => {
        expect(contactInfo[0]).toEqual(mockUpdatedContactInfo);
      });

      const request = httpTestingController.expectOne('/api/admin/contact/update/1');
      request.flush([mockUpdatedContactInfo]);
      httpTestingController.verify();
    });

    /*
    it('should DELETE an appointment', () => {
      apiService.deleteAppointment$('2').subscribe((apptAry) => {
        expect(apptAry[0]).toEqual(mockUpdatedAppt);
      });

      const request = httpTestingController.expectOne('/api/admin/appointments/2');
      request.flush([mockUpdatedAppt]);
      httpTestingController.verify();
    });
    */
  });

  // ===================================================
  // Services HTTP Service Tests
  // ===================================================

  describe('Services HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockService: any;
    let mockNewService: Service;
    let mockUpdatedService: Service;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockService = {
        title: 'Test Name',
        description: 'Test Email',
        image: 'Test Category',
        pricing: [
          {
            'price': '$40-$70',
            'type': 'Womens',
            'description': 'description...'
          },
          {
            'price': '$30-$60',
            'type': 'Mens',
            'description': 'description...'
          },
          {
            'price': '$25-$55',
            'type': 'Children (under 12)',
            'description': 'description...'
          },
          {
            'price': '$15',
            'type': 'Neck Trim',
            'description': 'description...'
          },
          {
            'price': '$10',
            'type': 'Bang Trim',
            'description': 'description...'
          },
          {
            'price': '$25-$55',
            'type': 'Wash & Style',
            'description': 'description...'
          }
        ],
        _id: '1'
      };

      mockNewService = new Service(
        'New Service Title',
        'New Service Description',
        'New Service Image',
        [],
        '2'
      );

      mockUpdatedService = new Service(
        'Updated Service Title',
        'Updated Service Description',
        'Updated Service Image',
        [{ 'price': '$40-$80', 'type': 'Womens', 'description': 'my updated description...' }],
        '2'
      );
    });

    it('should GET a list of services', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getServices$().subscribe((services) => {
        expect(services[0]).toEqual(mockService);
      });

      const request = httpTestingController.expectOne('/api/admin/services');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockService]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET a single service by ID', () => {
      apiService.getServiceDetailsById$('1').subscribe((services) => {
        expect(services[0]).toEqual(mockService);
      });

      const request = httpTestingController.expectOne('/api/admin/services/1');
      request.flush([mockService]);
      httpTestingController.verify();
    });

    it('should POST a new service', () => {
      apiService.postService$(mockNewService).subscribe((services) => {
        expect(services[0]).toEqual(mockNewService);
      });

      const request = httpTestingController.expectOne('/api/admin/services/new');
      request.flush([mockNewService]);
      httpTestingController.verify();
    });

    it('should UPDATE a service', () => {
      apiService.editService$('1', mockUpdatedService).subscribe((services) => {
        expect(services[0]).toEqual(mockUpdatedService);
      });

      const request = httpTestingController.expectOne('/api/admin/services/update/1');
      request.flush([mockUpdatedService]);
      httpTestingController.verify();
    });

    it('should DELETE a service', () => {
      apiService.deleteService$('2').subscribe((services) => {
        expect(services[0]).toEqual(mockUpdatedService);
      });

      const request = httpTestingController.expectOne('/api/admin/services/2');
      request.flush([mockUpdatedService]);
      httpTestingController.verify();
    });

  });

  // ===================================================
  // Gallery HTTP Service Tests
  // ===================================================

  describe('Gallery HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockGallery: any;
    let mockNewGallery: Gallery;
    let mockUpdatedGallery: Gallery;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockGallery = {
        path: 'Test Gallery Path',
        caption: 'Test Gallery Caption',
        _id: '1'
      };

      mockNewGallery = new Gallery(
        'New Gallery Path',
        'New Gallery Caption',
        '2'
      );

      mockUpdatedGallery = new Gallery(
        'Updated Gallery Path',
        'Updated Gallery Caption',
        '2'
      );
    });

    it('should GET a list of gallery images', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getGallery$().subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockGallery);
      });

      const request = httpTestingController.expectOne('/api/admin/gallery');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockGallery]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET a single gallery image by ID', () => {
      apiService.getGalleryPhotoById$('1').subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockGallery);
      });

      const request = httpTestingController.expectOne('/api/admin/gallery/1');
      request.flush([mockGallery]);
      httpTestingController.verify();
    });

    it('should POST a new gallery image', () => {
      apiService.postGalleryPhoto$(mockNewGallery).subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockNewGallery);
      });

      const request = httpTestingController.expectOne('/api/admin/gallery/new');
      request.flush([mockNewGallery]);
      httpTestingController.verify();
    });

    it('should UPDATE a gallery image', () => {
      apiService.editGalleryPhoto$('1', mockUpdatedGallery).subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockUpdatedGallery);
      });

      const request = httpTestingController.expectOne('/api/admin/gallery/update/1');
      request.flush([mockUpdatedGallery]);
      httpTestingController.verify();
    });

    it('should DELETE a gallery image', () => {
      apiService.deleteGalleryPhoto$('2').subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockUpdatedGallery);
      });

      const request = httpTestingController.expectOne('/api/admin/gallery/2');
      request.flush([mockUpdatedGallery]);
      httpTestingController.verify();
    });

  });

  // ===================================================
  // Personel HTTP Service Tests
  // ===================================================

  describe('Personel HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockPersonel: any;
    let mockNewPersonel: Personel;
    let mockUpdatedPersonel: Personel;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockPersonel = {
        name: 'Test Personel Name',
        role: 'Test Personel Role',
        bio: 'Test Personel Bio',
        photo: 'Test Personel Photo',
        _id: '1'
      };

      mockNewPersonel = new Personel(
        'New Personel Name',
        'New Personel Role',
        'New Personel Bio',
        'New Personel Photo',
        '2'
      );

      mockUpdatedPersonel = new Personel(
        'Updated Personel Name',
        'Updated Personel Role',
        'Updated Personel Bio',
        'Updated Personel Photo',
        '2'
      );
    });

    it('should GET a list of personel', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getPersonel$().subscribe((personel) => {
        expect(personel[0]).toEqual(mockPersonel);
      });

      const request = httpTestingController.expectOne('/api/admin/personel');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockPersonel]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET a single personel by ID', () => {
      apiService.getPersonelById$('1').subscribe((personel) => {
        expect(personel[0]).toEqual(mockPersonel);
      });

      const request = httpTestingController.expectOne('/api/admin/personel/1');
      request.flush([mockPersonel]);
      httpTestingController.verify();
    });

    it('should POST a new personel', () => {
      apiService.postPersonel$(mockNewPersonel).subscribe((personel) => {
        expect(personel[0]).toEqual(mockNewPersonel);
      });

      const request = httpTestingController.expectOne('/api/admin/personel/new');
      request.flush([mockNewPersonel]);
      httpTestingController.verify();
    });

    it('should UPDATE a personel', () => {
      apiService.editPersonel$('1', mockUpdatedPersonel).subscribe((gallery) => {
        expect(gallery[0]).toEqual(mockUpdatedPersonel);
      });

      const request = httpTestingController.expectOne('/api/admin/personel/update/1');
      request.flush([mockUpdatedPersonel]);
      httpTestingController.verify();
    });

    it('should DELETE a personel', () => {
      apiService.deletePersonel$('2').subscribe((personel) => {
        expect(personel[0]).toEqual(mockUpdatedPersonel);
      });

      const request = httpTestingController.expectOne('/api/admin/personel/2');
      request.flush([mockUpdatedPersonel]);
      httpTestingController.verify();
    });

  });

  // ===================================================
  // Requests HTTP Service Tests
  // ===================================================

  describe('Requests HTTP Service Operations - ', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let mockRequest: any;
    let mockNewRequest: Request;
    let mockUpdatedRequest: Request;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);

      // Assign a reference to the HttpTestingControler for interacting with the
      // HttpClientTestingModule.
      httpTestingController = TestBed.get(HttpTestingController);

      mockRequest = {
        name: 'Test Request Name',
        email: 'Test Request Email',
        message: 'Test Request Message',
        category: 'Test Request Category',
        _id: '1'
      };

      mockNewRequest = new Request(
        'New Request Name',
        'New Request Email',
        'New Request Message',
        'New Request Category',
        '2'
      );

      mockUpdatedRequest = new Request(
        'Updated Request Name',
        'Updated Request Email',
        'Updated Request Message',
        'Updated Request Category',
        '2'
      );
    });

    it('should GET a list of requests', () => {
      // Exercise the apiService method that makes a call to the server,
      // which emits an observable later, so it is not evaluated on this line.
      apiService.getRequests$().subscribe((requests) => {
        expect(requests[0]).toEqual(mockRequest);
      });

      const request = httpTestingController.expectOne('/api/admin/requests');

      // Cause the httpTestingController to emit the value being flushed.
      request.flush([mockRequest]);

      // Verify there are no outstanding requests.
      httpTestingController.verify();
    });

    it('should GET a single request by ID', () => {
      apiService.getRequestById$('1').subscribe((requests) => {
        expect(requests[0]).toEqual(mockRequest);
      });

      const request = httpTestingController.expectOne('/api/admin/requests/1');
      request.flush([mockRequest]);
      httpTestingController.verify();
    });

    it('should POST a new request', () => {
      apiService.postRequest$(mockNewRequest).subscribe((requests) => {
        expect(requests[0]).toEqual(mockNewRequest);
      });

      const request = httpTestingController.expectOne('/api/requests/new');
      request.flush([mockNewRequest]);
      httpTestingController.verify();
    });

    it('should UPDATE a request', () => {
      apiService.editRequest$('1', mockUpdatedRequest).subscribe((requests) => {
        expect(requests[0]).toEqual(mockUpdatedRequest);
      });

      const request = httpTestingController.expectOne('/api/admin/requests/update/1');
      request.flush([mockUpdatedRequest]);
      httpTestingController.verify();
    });

    it('should DELETE a request', () => {
      apiService.deleteRequest$('2').subscribe((requests) => {
        expect(requests[0]).toEqual(mockUpdatedRequest);
      });

      const request = httpTestingController.expectOne('/api/admin/requests/2');
      request.flush([mockUpdatedRequest]);
      httpTestingController.verify();
    });

  });

});
