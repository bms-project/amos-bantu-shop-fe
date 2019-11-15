import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAdSliderComponent } from './main-ad-slider/main-ad-slider.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMenuComponent } from './main-header/main-menu/main-menu.component';
import { MainSearchContainerComponent } from './main-header/main-search-container/main-search-container.component';
import { MainNavigationComponent } from './main-header/main-navigation/main-navigation.component';
import { MainNavigationAccordionComponent } from './main-header/main-navigation-accordion/main-navigation-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAdSliderComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainMenuComponent,
    MainSearchContainerComponent,
    MainNavigationComponent,
    MainNavigationAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
