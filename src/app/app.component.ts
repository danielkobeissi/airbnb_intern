import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'airBnb';
  isMobile = true;
  elementRef: any;
  private applyMobileStyles() {
    this.elementRef.nativeElement.classList.add('mobile-styles');
  }
  private applyDesktopStyles() {
    this.elementRef.nativeElement.classList.remove('mobile-styles');
  }

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state) => {
        this.isMobile = state.matches;
      });
  }

}
