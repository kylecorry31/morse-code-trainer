import { Component, OnInit, Input } from "@angular/core";
import { AnswerService } from "../answer.service";

@Component({
  selector: "app-morse-quiz",
  templateUrl: "./morse-quiz.component.html",
  styleUrls: ["./morse-quiz.component.scss"],
})
export class MorseQuizComponent implements OnInit {
  answer: string;

  enteredValue: string = "";

  isCorrect: boolean = false;
  isDone: boolean = false;

  constructor(private answerService: AnswerService) {}

  ngOnInit() {
    this.answer = this.answerService.getRandomAnswer();
  }

  checkAnswer() {
    if (this.isDone) {
      return;
    }

    console.log(this.enteredValue);

    this.isDone = true;
    if (this.enteredValue.toLowerCase() === this.answer.toLowerCase()) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }

  skip() {
    this.isCorrect = true;
    this.isDone = true;
  }

  next() {
    this.isDone = false;
    this.enteredValue = "";
    this.answer = this.answerService.getRandomAnswer();
  }
}
