import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseStudiesService {

  constructor() { }
  private caseStudies = [
    { id: 'juilliard', orgName: 'Juilliard', cardImage: 'assets/images/Juilliard_card.jpg' },
    { id: 'st-georges', orgName: "St George's University", cardImage: 'assets/images/SGU_card.jpg' },
    { id: 'tallahassee-symphony', orgName: 'Tallahassee Symphony Orchestra', cardImage: 'assets/images/TSO_card.jpg' }
    // ... other case studies
  ];

  getCaseStudies() {
    return this.caseStudies;
  }
  getCaseStudySummary() {
    // Return summary data for the cards
  }

  getCaseStudyDetails(caseStudyId: string) {
    // Return detailed data based on caseStudyId
  }
}
