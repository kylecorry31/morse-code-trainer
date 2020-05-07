import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MorsePlayerComponent } from "./morse-player/morse-player.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MorseQuizComponent } from "./morse-quiz/morse-quiz.component";
import { MorseCheckBannerComponent } from "./morse-check-banner/morse-check-banner.component";
import { MorseTextEntryComponent } from "./morse-text-entry/morse-text-entry.component";
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MorsePlayerComponent,
    MorseQuizComponent,
    MorseCheckBannerComponent,
    MorseTextEntryComponent,
    MainMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
