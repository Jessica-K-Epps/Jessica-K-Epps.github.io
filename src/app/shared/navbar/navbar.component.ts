import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // TODO: determine what the navbar should do:
  // - navigate to elements on every page?
  // - navigate to pages of the app?
  // TODO: make navbar work for all pages

  isHomeRoute(): boolean {
    return this.router.url === '/'; // Check if the current route is the home route
  }
}
