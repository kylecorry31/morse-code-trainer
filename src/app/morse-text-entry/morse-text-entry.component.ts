import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "app-morse-text-entry",
  templateUrl: "./morse-text-entry.component.html",
  styleUrls: ["./morse-text-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorseTextEntryComponent implements OnInit, OnChanges {
  @Output() textEntered = new EventEmitter<string>();
  @Input() disabled: boolean;

  enteredText: string = "";
  private wasDisabled: boolean = false;

  constructor() {}

  ngOnInit() {
    this.wasDisabled = this.disabled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.wasDisabled && !this.disabled) {
      this.enteredText = "";
    }

    this.wasDisabled = this.disabled;
  }

  onTextChange(text: string) {
    this.textEntered.emit(text);
    this.enteredText = text;
  }
}
