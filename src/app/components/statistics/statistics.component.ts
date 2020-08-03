import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  public statistics: any;
  public type: 'total' | 'month';

  public displaySpinner = false;
  public errorOccured = false;

  private subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    this.getTotalStatistics();
  }

  getTotalStatistics() {
    if (this.type === 'total') {
      return;
    }

    this.errorOccured = false;

    this.type = 'total';
    this.statistics = undefined;
    this.displaySpinner = true;

    this.subscriptions.push(
      this.photoService.getUnsplashStatistics('total')
      .pipe(
        finalize(() => this.displaySpinner = false)
      )
      .subscribe(
        (stats) => this.statistics = stats,
        (error) => this.errorOccured = true
      )
    );
  }

  getMonthStatistics() {
    if (this.type === 'month') {
      return;
    }

    this.errorOccured = false;

    this.type = 'month';
    this.statistics = undefined;
    this.displaySpinner = true;

    this.subscriptions.push(
      this.photoService.getUnsplashStatistics('month')
      .pipe(
        finalize(() => this.displaySpinner = false)
      )
      .subscribe(
        (stats) => this.statistics = stats,
        (error) => this.errorOccured = true
      )
    );
  }
}
