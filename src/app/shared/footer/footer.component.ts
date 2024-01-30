import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links = [
    {
      label: 'Email',
      url: 'jessicakimepps@gmail.com',
      displayText: 'Email',
      assetPath: 'assets/icons/emailCream.png',
      hoverAssetPath: 'assets/icons/emailPink.png' // Path to cream-colored icon
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jessicaeppsboyette',
      displayText: 'LinkedIn',
      assetPath: 'assets/icons/linkedInCream.png',
      hoverAssetPath: 'assets/icons/linkedInPink.png' // Path to cream-colored icon
    }
  ];

  changeIcon(event: MouseEvent, assetPath: string) {
    (event.target as HTMLImageElement).src = assetPath;
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }

  // TODO: this stuff needs to be moved to styles.scss & made global
  onMouseDown(event: MouseEvent) {
    (event.target as HTMLElement).classList.add('active');
  }

  onMouseUp(event: MouseEvent) {
    (event.target as HTMLElement).classList.remove('active');
  }
}
