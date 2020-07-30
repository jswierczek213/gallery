import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor() { }

  @Output() closed = new EventEmitter();

  emitCloseEvent() {
    this.closed.emit(false);
  }

}
