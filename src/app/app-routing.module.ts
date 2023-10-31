// Library Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App Imports
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AboutMeExpandedComponent } from './views/about-me-expanded/about-me-expanded.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-me-expanded', component: AboutMeExpandedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
