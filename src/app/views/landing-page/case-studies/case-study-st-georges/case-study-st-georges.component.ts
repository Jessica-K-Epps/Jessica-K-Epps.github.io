import { Component } from '@angular/core';

import { CaseStudyStatCardComponent } from 'src/app/shared/case-study-stat-card/case-study-stat-card.component';

@Component({
  selector: 'app-case-study-st-georges',
  templateUrl: './case-study-st-georges.component.html',
  styleUrls: ['./case-study-st-georges.component.scss'],
})
export class CaseStudyStGeorgesComponent {
  orgName = 'St. Georges';

  statProperties = [
    {
      iconPath: 'assets/icons/engagementPink.png',
      title: 'Engagements',
      value: '17,693',
    },
    {
      iconPath: 'assets/icons/viewsPink.png',
      title: 'Video Views',
      value: '147,201',
    },
    {
      iconPath: 'assets/icons/reachPink.png',
      title: 'Audiance Growth',
      value: '1,038',
    },
    // {
    //   iconPath: '/assets/icons/clicksPink.png',
    //   title: "Traffic Driven to 'Welcome' Website",
    //   value: '179',
    // },
    // {
    //   iconPath: '/assets/icons/clicksPink.png',
    //   title: 'Traffic Driven to informational blog posts & articles',
    //   value: '374',
    // },
    {
      iconPath: '/assets/icons/clicksPink.png',
      title: 'Clicks to Websites',
      value: '553',
    },
  ];
}
