import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CaseStudiesService } from './case-studies.service';
import { CaseStudyJuilliardComponent } from './case-study-juilliard/case-study-juilliard.component'
import { CaseStudyStGeorgesComponent } from './case-study-st-georges/case-study-st-georges.component';
import { CaseStudyTallahasseeSymphonyComponent } from './case-study-tallahassee-symphony/case-study-tallahassee-symphony.component';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent {
  caseStudies: any[] = []; 
  activeCard = 1; // Default to the first card being open

  constructor(
    private router: Router,
    private caseStudiesService: CaseStudiesService,
  ) {
    this.caseStudies = this.caseStudiesService.getCaseStudies();
    this.activeCard = this.caseStudies.length > 0 ? this.caseStudies[0].id : ''
    this.updateCardColors();
  }

  setActiveCard(cardNumber: number) {
    console.log('active cared', this.activeCard, 'this cardNumber', cardNumber);
    if (this.activeCard === cardNumber) {
      // If the card is already open, navigate to the case study view
      this.openCaseStudy(cardNumber);
    } else {
      // Otherwise, just open the clicked card
      this.activeCard = cardNumber;
      this.updateCardColors();
    }
  }

  updateCardColors() {
    this.caseStudies.forEach((study, index) => {
      study.color = this.getCardColor(index + 1);
    });
  }

  getCardColor(index: number): string {
    if (index === this.activeCard) {
      return 'primary';
    } else if (index === this.getNextCardIndex()) {
      return 'secondary';
    } else {
      return 'tertiary';
    }
  }

  getNextCardIndex(): number {
    let nextIndex = this.activeCard % this.caseStudies.length + 1;
    return nextIndex;
  }

  openCaseStudy(caseStudyId: number) {
    // Implement actual navigation logic
    this.router.navigate(['/case-study', caseStudyId]);
  }
}