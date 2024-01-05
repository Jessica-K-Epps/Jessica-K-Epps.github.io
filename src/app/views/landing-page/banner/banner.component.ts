import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({
        opacity: 1,
        display: 'block'
      })),
      state('invisible', style({
        opacity: 0,
        display: 'none'
      })),
      transition('visible => invisible', [
        animate('2s')
      ]),
    ]),
  ]
})
export class BannerComponent {

  jessEmail: string = 'jessicakimepps@gmail.com';
  fadeState: string = 'invisible';

  copyEmailToClipboard(): void {
    navigator.clipboard.writeText(this.jessEmail).then(() => {
      // Handle successful copy, like showing a tooltip or message
      console.log('Email address copied to clipboard!');
    }, (err) => {
      // Handle errors, such as if the copy command isn’t available
      console.error('Could not copy email to clipboard: ', err);
    });
  }

  showMessage(): void {
    this.fadeState = 'visible';
    setTimeout(() => this.fadeState = 'invisible', 2000); // Message will fade after 2 seconds
  }

  navigateTo(platform: string) {
    // Navigate to the selected platform
    // For example, if you're using Angular's Router:
    // this.router.navigate([`/${platform.toLowerCase()}`]);

    console.log(`Navigating to ${platform}`);
  }
}
