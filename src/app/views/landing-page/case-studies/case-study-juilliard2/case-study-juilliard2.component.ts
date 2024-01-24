import { Component } from '@angular/core';

import { CaseStudyStatCardComponent } from 'src/app/shared/case-study-stat-card/case-study-stat-card.component';

@Component({
  selector: 'app-case-study-juilliard2',
  templateUrl: './case-study-juilliard2.component.html',
  styleUrls: ['./case-study-juilliard2.component.scss'],
})
export class CaseStudyJuilliard2Component {
  orgName = 'Juilliard';

  statProperties = [
    {
      iconPath: 'assets/icons/reachPink.png',
      title: 'Reach',
      value: '207,844',
    },
    {
      iconPath: 'assets/icons/engagementPink.png',
      title: 'Engagements',
      value: '16,353',
    },
    {
      iconPath: '/assets/icons/clicksPink.png',
      title: 'Clicks to Live Stream',
      // value: 'paid: 1.6% CTR, organic: 0.3% CTR'
      value: '587',
    },
    {
      iconPath: 'assets/icons/reachPink.png',
      title: 'Audiance',
      value: '92% of house filled',
    },
    {
      iconPath: 'assets/icons/hashtagPink.png',
      title: 'Uses of #Juilliard2018',
      value: '196',
    },
  ];
}
