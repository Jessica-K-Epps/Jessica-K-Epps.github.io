import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-expanded',
  templateUrl: './about-me-expanded.component.html',
  styleUrls: ['./about-me-expanded.component.scss'],
})
export class AboutMeExpandedComponent {
  constructor(private router: Router) {}

  navigateToLandingPage() {
    console.log('Navigating back to Landing Page');
    this.router.navigate(['/']);
  }
}
