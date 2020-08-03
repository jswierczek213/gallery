import { Component, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnDestroy {

  constructor(private photoService: PhotoService, private router: Router) { }

  private orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape';

  public photo: any;

  public displaySpinner = false;

  private subscriptions: Array<Subscription> = [];


  setOrientation(value: 'landscape' | 'portrait' | 'squarish') {
    this.orientation = value;
  }

  generate() {
    this.photo = undefined;
    this.displaySpinner = true;

    this.subscriptions.push(
      this.photoService.getRandomPhoto(this.orientation).subscribe(
        (photo) => this.photo = photo,
        (err) => console.error(err)
      )
    );
  }

  hideSpinner() {
    this.displaySpinner = false;
  }

  moveToPhotoDetails() {
    this.router.navigate(['/photo/' + this.photo.id]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
