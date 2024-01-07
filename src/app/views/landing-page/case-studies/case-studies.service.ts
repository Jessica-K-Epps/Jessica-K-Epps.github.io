import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseStudiesService {

  constructor() { }
  private caseStudies = [
    { id: 'juilliard', orgName: 'Juilliard' },
    { id: 'st-georges', orgName: "St George's University" },
    { id: 'tallahassee-symphony', orgName: 'Tallahassee Symphony Orchestra' }
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
