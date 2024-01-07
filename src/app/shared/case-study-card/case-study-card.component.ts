import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CaseStudiesService } from 'src/app/views/landing-page/case-studies/case-studies.service';

@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.component.html',
  styleUrls: ['./case-study-card.component.scss']
})
export class CaseStudyCardComponent {
  @Input() isOpen = false;
  @Input() orgName: string = '';
  @Input() cardColor: string = '';
  @Output() cardClick = new EventEmitter<boolean>();

  
  toggleCard() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // Card is now open, notify parent component
      this.cardClick.emit(true);
    } else {
      // Card is closed, maybe navigate to the case study view
      this.cardClick.emit(false);
    }
  }

  getBackgroundColor(colorName: string): string {
    switch (colorName) {
      case 'primary': return '#d59ba7';
      case 'secondary': return '#fffaf0';
      case 'tertiary': return '#5c5c5c';
      // Add more cases as needed
      default: return '#1f1f1f'; // Default or 'quad' color
    }
  }
}
