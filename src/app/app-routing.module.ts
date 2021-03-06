import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MorseQuizComponent } from "./morse-quiz/morse-quiz.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MorseLearnComponent } from "./morse-learn/morse-learn.component";
import { MorseSensoryTrainerComponent } from "./morse-sensory-trainer/morse-sensory-trainer.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: MainMenuComponent },
  { path: "learn", component: MorseLearnComponent },
  { path: "sense", component: MorseSensoryTrainerComponent },
  { path: "practice/:level", component: MorseQuizComponent },
  { path: "*/**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
