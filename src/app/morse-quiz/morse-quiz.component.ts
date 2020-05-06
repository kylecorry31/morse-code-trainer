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

  result: string = "";
  isCorrect: boolean = false;

  constructor(private answerService: AnswerService) {}

  ngOnInit() {
    this.answer = this.answerService.getRandomAnswer();
  }

  checkAnswer() {
    if (this.enteredValue.toLowerCase() === this.answer.toLowerCase()) {
      this.result = "correct!";
      this.isCorrect = true;
      this.enteredValue = "";
    } else {
      this.result = "incorrect!";
      this.isCorrect = false;
    }

    setTimeout(() => {
      this.result = "";
      this.answer = this.answerService.getRandomAnswer();
    }, 1000);
  }
}
