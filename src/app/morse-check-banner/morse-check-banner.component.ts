import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-morse-check-banner",
  templateUrl: "./morse-check-banner.component.html",
  styleUrls: ["./morse-check-banner.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorseCheckBannerComponent implements OnInit {
  @Input() isCorrect: boolean;
  @Input() correctAnswer: string;

  @Output() next = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
