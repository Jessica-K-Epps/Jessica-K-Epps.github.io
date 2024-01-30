import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-expanded',
  templateUrl: './about-me-expanded.component.html',
  styleUrls: ['./about-me-expanded.component.scss'],
})
export class AboutMeExpandedComponent {
  resumeLocation = 'assets/resume/JessicaEppsBoyette_Resume_2024.pdf'

  constructor(private router: Router) {}

  // TODO: make tooltips work (maybe add more tooltips throughout app?)

  navigateToLandingPage() {
    console.log('Navigating back to Landing Page');
    this.router.navigate(['/']);
  }

  downloadResume() {
    // window.location.href = this.resumeLocation;

    window.open(this.resumeLocation);
  }
  

  onMouseDown(event: MouseEvent) {
    (event.target as HTMLElement).classList.add('active');
  }

  onMouseUp(event: MouseEvent) {
    (event.target as HTMLElement).classList.remove('active');
  }
}
