import { Component, OnDestroy, Input } from '@angular/core';
import { Personel } from './../../../core/models/personel';
import { Subscription } from 'rxjs'
import { ApiService } from './../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.scss']
})
export class DeleteMemberComponent implements OnDestroy {
  @Input() member: Personel;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(private api: ApiService, private router: Router) {}

  removeMember() {
    this.submitting = true;
    // DELETE member by ID
    this.deleteSub = this.api.deletePersonel$(this.member._id).subscribe(
      res => {
        this.submitting = false;
        this.error = false;
        console.log(res.message);
        // If successfully deleted member, redirect to Admin
        this.router.navigate(['/admin/personel']);
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
