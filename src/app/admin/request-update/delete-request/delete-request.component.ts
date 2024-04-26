import { Component, OnDestroy, Input } from '@angular/core';
import { Request } from './../../../core/models/request';
import { Subscription } from 'rxjs'
import { ApiService } from './../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.scss']
})
export class DeleteRequestComponent implements OnDestroy {
  @Input() request: Request;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(private api: ApiService, private router: Router) {}

  removeRequest() {
    this.submitting = true;
    // DELETE event by ID
    this.deleteSub = this.api.deleteRequest$(this.request._id).subscribe(
      res => {
        this.submitting = false;
        this.error = false;
        console.log(res.message);
        // If successfully deleted event, redirect to Admin
        this.router.navigate(['/admin/requests']);
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
