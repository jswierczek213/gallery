import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
    ) { }

    @ViewChild('resultsContainer') resultsContainer: ElementRef;

  public data: any;

  private query: string;
  public page: number;

  public displaySpinner: boolean;
  public errorOccured: boolean;

  private subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams() {
    this.subscriptions.push(
      this.route.queryParams.subscribe(
        (params) => {
          this.query = params.query;
          this.page = parseInt(params.page, 10);
          this.getResults();
        },
        (err) => this.errorOccured = true
      )
    );
  }

  getResults() {
    this.displaySpinner = true;
    this.errorOccured = false;

    this.subscriptions.push(
      this.searchService.searchPhotos(this.query, this.page, 12)
      .pipe(
        finalize(() => this.displaySpinner = false)
      )
      .subscribe(
        (results) => this.data = results,
        (err) => this.errorOccured = true
      )
    );
  }

  changePage(page: number) {
    const verticalOffset = this.resultsContainer.nativeElement.offsetTop;
    window.scroll(0, verticalOffset);

    this.data = undefined;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { query: this.query, page },
      queryParamsHandling: 'merge'
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
