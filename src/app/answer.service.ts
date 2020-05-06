import { Injectable } from "@angular/core";
import * as randomWords from "random-words";

@Injectable({
  providedIn: "root",
})
export class AnswerService {
  constructor() {}

  getRandomAnswer(): string {
    return randomWords({ min: 1, max: 4, maxLength: 10, join: " " });
  }
}
