import { Component, OnDestroy, Input } from '@angular/core';
import { Appointment } from './../../../core/models/appointment';
import { Subscription } from 'rxjs'
import { ApiService } from './../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.scss']
})
export class DeleteAppointmentComponent implements OnDestroy {
  @Input() appointment: Appointment;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(private api: ApiService, private router: Router) {}

  removeAppointment() {
    this.submitting = true;
    // DELETE appointment by ID
    this.deleteSub = this.api.deleteAppointment$(this.appointment._id).subscribe(
      res => {
        this.submitting = false;
        this.error = false;
        console.log(res.message);
        // If successfully deleted appointment, redirect to Admin
        this.router.navigate(['/admin/appointments']);
      },
      err => {
        console.error(err);
        this.submitting = false;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
