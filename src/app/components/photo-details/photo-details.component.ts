import { finalize } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  public photo: any;

  public displaySpinner: boolean;
  public errorOccured: boolean;

  private subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    // Set photo id
    const photoId = this.route.snapshot.params.id;

    this.getPhoto(photoId);
  }

  getPhoto(id: string) {
    // Show spinner before data load
    this.displaySpinner = true;

    this.subscriptions.push(
      this.photoService.getSinglePhoto(id)
      .pipe(
        finalize(() => this.displaySpinner = false)
      )
      .subscribe(
        (photo) => this.photo = photo,
        (err) => this.errorOccured = true
      )
    );
  }

  emitDownloadEvent(id: string) {
    this.subscriptions.push(
      this.photoService.getPhotoDownloadUrl(id).subscribe(
        (res) => null,
        (err) => console.error(err)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
