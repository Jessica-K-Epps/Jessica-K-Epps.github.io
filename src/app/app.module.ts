// Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';

// App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BannerComponent } from './views/landing-page/banner/banner.component';
import { AboutMeComponent } from './views/landing-page/about-me/about-me.component';
import { ServicesOfferedComponent } from './views/landing-page/services-offered/services-offered.component';
import { ContactMeComponent } from './views/landing-page/contact-me/contact-me.component';
import { PortfolioSummaryComponent } from './views/landing-page/portfolio-summary/portfolio-summary.component';
import { AboutMeExpandedComponent } from './views/landing-page/about-me/about-me-expanded/about-me-expanded.component';
import { SkillsAndToolsComponent } from './views/landing-page/skills-and-tools/skills-and-tools.component';
import { CaseStudiesComponent } from './views/landing-page/case-studies/case-studies.component';
import { CaseStudyComponent } from './views/landing-page/case-studies/case-study/case-study.component';
import { CaseStudyCardComponent } from './shared/case-study-card/case-study-card.component';
import { CaseStudyJuilliardComponent } from './views/landing-page/case-studies/case-study-juilliard/case-study-juilliard.component';
import { CaseStudyStGeorgesComponent } from './views/landing-page/case-studies/case-study-st-georges/case-study-st-georges.component';
import { CaseStudyTallahasseeSymphonyComponent } from './views/landing-page/case-studies/case-study-tallahassee-symphony/case-study-tallahassee-symphony.component';

// App Shared Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WordCloudComponent } from './shared/word-cloud/word-cloud.component';
import { CaseStudyStatCardComponent } from './shared/case-study-stat-card/case-study-stat-card.component';
import { CaseStudyJuilliard2Component } from './views/landing-page/case-studies/case-study-juilliard2/case-study-juilliard2.component';
import { SiteTodoChecklistComponent } from './views/landing-page/site-todo-checklist/site-todo-checklist.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HighlightNumbersPipe } from './shared/case-study-stat-card/stat-value-pipe/highlight-numbers.pipe';

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
    CaseStudiesComponent,
    CaseStudyComponent,
    CaseStudyCardComponent,
    CaseStudyJuilliardComponent,
    CaseStudyStGeorgesComponent,
    CaseStudyTallahasseeSymphonyComponent,
    WordCloudComponent,
    NavbarComponent,
    CaseStudyStatCardComponent,
    CaseStudyJuilliard2Component,
    SiteTodoChecklistComponent,
    FooterComponent,
    HighlightNumbersPipe,
  ],
  exports: [
    HighlightNumbersPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
