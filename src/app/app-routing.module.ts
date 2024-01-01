// Library Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App Imports
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AboutMeExpandedComponent } from './views/about-me-expanded/about-me-expanded.component';
import { CaseStudyComponent } from './views/landing-page/case-studies/case-study/case-study.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-me-expanded', component: AboutMeExpandedComponent },
  { path: 'case-study', component: CaseStudyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
