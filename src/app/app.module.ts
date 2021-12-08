import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopOfSiteComponent } from './Components/top-of-site/top-of-site.component';
import { PreLoaderComponent } from './Components/pre-loader/pre-loader/pre-loader.component';
import { SiteHeaderComponent } from './Components/site-header/site-header.component';
import { HeaderComponent } from './Components/header/header.component';
import { SliderComponent } from './Components/slider/slider.component';
import { SkillComponent } from './Components/skill/skill.component';
import { SkillTextComponent } from './Components/skill-text/skill-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TopOfSiteComponent,
    PreLoaderComponent,
    SiteHeaderComponent,
    HeaderComponent,
    SliderComponent,
    SkillComponent,
    SkillTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
