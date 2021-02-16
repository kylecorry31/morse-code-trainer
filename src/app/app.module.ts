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
import { MorseLearnComponent } from './morse-learn/morse-learn.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MorseSensoryTrainerComponent } from './morse-sensory-trainer/morse-sensory-trainer.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MorsePlayerComponent,
    MorseQuizComponent,
    MorseCheckBannerComponent,
    MorseTextEntryComponent,
    MainMenuComponent,
    MorseLearnComponent,
    MorseSensoryTrainerComponent,
    IconButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
