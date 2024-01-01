import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent {
  constructor(private router: Router) {}

  navigateToCaseStudy() {
    console.log('navigate to case study');
    this.router.navigate(['case-study']);
  }
}
