import { Component, OnInit } from "@angular/core";
import { Signal } from "../domain/signal";
import { MorseService } from "../morse-service.service";

@Component({
  selector: "app-morse-sensory-trainer",
  templateUrl: "./morse-sensory-trainer.component.html",
  styleUrls: ["./morse-sensory-trainer.component.scss"],
})
export class MorseSensoryTrainerComponent implements OnInit {
  letter1: string;
  letter2: string;
  same: boolean;
  isCorrect: boolean;

  letters: string[] = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  morseLetters: Signal[][];

  constructor(private morseService: MorseService) {
    this.morseLetters = this.letters.map((it) => this.toMorse(it));
  }

  ngOnInit(): void {
    this.selectNextLetters();
  }

  selectNextLetters() {
    this.isCorrect = null;
    let selected = this.getRandomIdx(this.morseLetters);

    let selected2: number;
    if (Math.random() < 0.6) {
      let matching = this.morseLetters
        .map((value, index) => {
          if (value.length === this.morseLetters[selected].length) {
            return index;
          } else {
            return null;
          }
        })
        .filter((it) => it != null);

      selected2 = matching[this.getRandomIdx(matching)];
    } else {
      selected2 = selected;
    }

    this.same = selected === selected2;
    this.letter1 = this.letters[selected];
    this.letter2 = this.letters[selected2];
  }

  private toMorse(letter: string): Signal[] {
    return this.morseService.encode(letter);
  }

  private getRandomIdx(list: any[]): number {
    return Math.floor(Math.random() * list.length);
  }
}
