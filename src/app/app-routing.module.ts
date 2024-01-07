// Library Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App Imports
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AboutMeExpandedComponent } from './views/about-me-expanded/about-me-expanded.component';
import { CaseStudyComponent } from './views/landing-page/case-studies/case-study/case-study.component';
import { CaseStudyJuilliardComponent } from './views/landing-page/case-studies/case-study-juilliard/case-study-juilliard.component';
import { CaseStudyStGeorgesComponent } from './views/landing-page/case-studies/case-study-st-georges/case-study-st-georges.component';
import { CaseStudyTallahasseeSymphonyComponent } from './views/landing-page/case-studies/case-study-tallahassee-symphony/case-study-tallahassee-symphony.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-me-expanded', component: AboutMeExpandedComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'case-study/juilliard', component: CaseStudyJuilliardComponent },
  { path: 'case-study/st-georges', component: CaseStudyStGeorgesComponent },
  { path: 'case-study/tallahassee-symphony', component: CaseStudyTallahasseeSymphonyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
