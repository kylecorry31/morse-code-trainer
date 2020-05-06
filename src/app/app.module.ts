import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MorsePlayerComponent } from "./morse-player/morse-player.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MorseQuizComponent } from "./morse-quiz/morse-quiz.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [AppComponent, MorsePlayerComponent, MorseQuizComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
