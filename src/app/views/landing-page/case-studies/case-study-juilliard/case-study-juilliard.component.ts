import { Component } from '@angular/core';

import { CaseStudyStatCardComponent } from 'src/app/shared/case-study-stat-card/case-study-stat-card.component';

@Component({
  selector: 'app-case-study-juilliard',
  templateUrl: './case-study-juilliard.component.html',
  styleUrls: ['./case-study-juilliard.component.scss']
})
export class CaseStudyJuilliardComponent {

  orgName = 'Juilliard'

  statProperties = [
    { 
      iconPath: '/assets/icons/clicksPink.png', 
      title: 'Clicks to Ticketing Page', 
      value: 'paid: 1.6% CTR, organic: 0.3% CTR' 
    },
    { 
      iconPath: 'assets/icons/viewsPink.png', 
      title: 'Video Views', 
      value: '4,300' 
    },
    { 
      iconPath: 'assets/icons/engagementPink.png', 
      title: 'Engagements', 
      value: '10,000' 
    },
    { 
      iconPath: 'assets/icons/reachPink.png', 
      title: 'Audiance', 
      value: '92% of house filled' 
    },
  ];
}
