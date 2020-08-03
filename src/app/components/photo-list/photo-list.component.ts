import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {

  constructor() { }

  @Input() heading: string;
  @Input() url: string;
  @Input() photoList: Array<any> = [];
  @Input() displaySpinner = false;
  @Input() displayButton = false;
  @Input() enableLoading = false;

}
