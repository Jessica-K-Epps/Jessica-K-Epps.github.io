import { Component, Input } from '@angular/core';

export interface StatProperty {
  iconPath: string;
  title: string;
  value: string;
}

@Component({
  selector: 'app-case-study-stat-card',
  templateUrl: './case-study-stat-card.component.html',
  styleUrls: ['./case-study-stat-card.component.scss']
})
export class CaseStudyStatCardComponent {
  @Input() statProperty: StatProperty = { 
    iconPath: '', 
    title: '', 
    value: '' };
}
