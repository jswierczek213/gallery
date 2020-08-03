import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  @Output() closed = new EventEmitter();

  public searchForm: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: ['', [ Validators.required ]]
    });
  }

  emitCloseEvent() {
    this.closed.emit(false);
  }

  search() {

    if (this.searchForm.invalid) {
      return;
    }

    const query = this.searchForm.value.query;
    const safeQuery = encodeURIComponent(query);

    const startPageNumber = 1;

    this.router.navigate(['/search-results'], { queryParams: { query: safeQuery, page: startPageNumber } });
  }

}
