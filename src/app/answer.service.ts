import { Injectable } from "@angular/core";
import * as randomWords from "random-words";

@Injectable({
  providedIn: "root",
})
export class AnswerService {
  constructor() {}

  getRandomAnswer(level: number): string {
    return randomWords({
      min: 1,
      max: this.getMaxWords(level),
      maxLength: this.getMaxWordLength(level),
      join: " ",
    });
  }

  private getMaxWordLength(level: number): number {
    if (level <= 2) {
      return 4;
    } else if (level === 3) {
      return 6;
    } else if (level === 4) {
      return 6;
    } else {
      return 8;
    }
  }

  private getMaxWords(level: number): number {
    if (level <= 2) {
      return 1;
    } else if (level === 3) {
      return 2;
    } else if (level === 4) {
      return 3;
    } else {
      return 5;
    }
  }
}
