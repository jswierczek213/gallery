import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss']
})
export class StatisticsViewComponent {

  constructor() { }

  @Input() type: 'total' | 'month';
  @Input() statistics: any;

}
