// Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';

// App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BannerComponent } from './views/landing-page/banner/banner.component';
import { AboutMeComponent } from './views/landing-page/about-me/about-me.component';
import { ServicesOfferedComponent } from './views/landing-page/services-offered/services-offered.component';
import { ContactMeComponent } from './views/landing-page/contact-me/contact-me.component';
import { PortfolioSummaryComponent } from './views/landing-page/portfolio-summary/portfolio-summary.component';
import { AboutMeExpandedComponent } from './views/about-me-expanded/about-me-expanded.component';
import { SkillsAndToolsComponent } from './views/landing-page/skills-and-tools/skills-and-tools.component';
import { WordCloudComponent } from './views/landing-page/skills-and-tools/word-cloud/word-cloud.component';
import { CaseStudiesComponent } from './views/landing-page/case-studies/case-studies.component';
import { CaseStudyComponent } from './views/landing-page/case-studies/case-study/case-study.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BannerComponent,
    AboutMeComponent,
    ServicesOfferedComponent,
    ContactMeComponent,
    PortfolioSummaryComponent,
    AboutMeExpandedComponent,
    SkillsAndToolsComponent,
    WordCloudComponent,
    CaseStudiesComponent,
    CaseStudyComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, ButtonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
