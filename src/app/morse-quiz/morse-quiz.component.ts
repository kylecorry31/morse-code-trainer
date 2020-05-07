import { Component, OnInit, Input } from "@angular/core";
import { AnswerService } from "../answer.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: "app-morse-quiz",
  templateUrl: "./morse-quiz.component.html",
  styleUrls: ["./morse-quiz.component.scss"],
})
export class MorseQuizComponent implements OnInit {
  @Input() level: number;

  answer: string;

  enteredValue: string = "";

  isCorrect: boolean = false;
  isDone: boolean = false;

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.level = +this.route.snapshot.params["level"];
    this.answer = this.answerService.getRandomAnswer(this.level);
  }

  checkAnswer() {
    if (this.isDone || this.enteredValue.trim().length === 0) {
      return;
    }

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
    this.answer = this.answerService.getRandomAnswer(this.level);
  }
}
