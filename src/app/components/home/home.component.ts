import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private photoService: PhotoService) { }

  public popularPhotos: Array<any> = [];
  public latestPhotos: Array<any> = [];

  private subscriptions: Array<Subscription> = [];

  ngOnInit(): void {

    // Get popular photos
    this.subscriptions.push(
      this.photoService.getListFromAllPhotos(undefined, 8, 'popular')
      .subscribe(
        (photos: any) => this.popularPhotos = photos,
        (err) => console.error(err)
      )
    );

    // Get latest photos
    this.subscriptions.push(
      this.photoService.getListFromAllPhotos(undefined, 8, 'latest')
      .subscribe(
        (photos: any) => this.latestPhotos = photos,
        (err) => console.error(err)
      )
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
