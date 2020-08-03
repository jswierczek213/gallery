import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('toggleSidenav', [
      state('open', style({
        right: '0'
      })),
      state('closed', style({
        right: '-50vw'
      })),
      transition('open <=> closed', [ animate('350ms linear') ])
    ]),
    trigger('rotateButton', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('normal <=> rotated', [ animate('350ms linear') ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public displaySearchBar = false;
  private innerWidth: number;

  public isOpen = false;
  public isMobile: boolean;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  checkIfMobile() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  openSearchBar() {
    this.displaySearchBar = true;
  }

  closeSearchBar(value: boolean) {
    this.displaySearchBar = value;
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

}
