import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  navigateTo(platform: string) {
    // Navigate to the selected platform
    // For example, if you're using Angular's Router:
    // this.router.navigate([`/${platform.toLowerCase()}`]);

    console.log(`Navigating to ${platform}`);
  }
}
