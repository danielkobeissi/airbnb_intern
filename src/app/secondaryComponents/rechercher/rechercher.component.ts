import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
  isMobile: boolean;

  constructor() {
    this.checkDeviceType();
  }
   
  onSearch() {
    // Placeholder for search functionality
    console.log('Perform search');
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkDeviceType();
  }

  private checkDeviceType() {
    this.isMobile = window.innerWidth < 768; // Example breakpoint
    console.log(window.innerWidth )
  }
}
