import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-morse-learn",
  templateUrl: "./morse-learn.component.html",
  styleUrls: ["./morse-learn.component.scss"],
})
export class MorseLearnComponent implements OnInit {
  selectedLetter: string = "";

  letters: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  numbers: string[] = "1234567890".split("");

  constructor() {}

  ngOnInit() {}

  playLetter(letter: string) {
    this.selectedLetter = "";
    setTimeout(() => {
      this.selectedLetter = letter;
    }, 10);
  }
}
