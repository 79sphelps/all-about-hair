import { Component, OnDestroy, Input } from '@angular/core';
import { Gallery } from './../../../core/models/gallery';
import { Subscription } from 'rxjs'
import { ApiService } from './../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-photo',
  templateUrl: './delete-photo.component.html',
  styleUrls: ['./delete-photo.component.scss']
})
export class DeletePhotoComponent implements OnDestroy {
  @Input() photo: Gallery;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(private api: ApiService, private router: Router) {}

  removePhoto() {
    this.submitting = true;
    // DELETE photo by ID
    this.deleteSub = this.api.deleteGalleryPhoto$(this.photo._id).subscribe(
      res => {
        this.submitting = false;
        this.error = false;
        console.log(res.message);
        // If successfully deleted photo, redirect to Admin
        this.router.navigate(['/admin/gallery']);
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
