import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BannerComponent } from './views/landing-page/banner/banner.component';
import { AboutMeComponent } from './views/landing-page/about-me/about-me.component';
import { ServicesOfferedComponent } from './views/landing-page/services-offered/services-offered.component';
import { ContactMeComponent } from './views/landing-page/contact-me/contact-me.component';
import { PortfolioSummaryComponent } from './views/landing-page/portfolio-summary/portfolio-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BannerComponent,
    AboutMeComponent,
    ServicesOfferedComponent,
    ContactMeComponent,
    PortfolioSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
