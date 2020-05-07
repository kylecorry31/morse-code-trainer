import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MorseService } from "../morse-service.service";
import { Signal } from "../domain/signal";

@Component({
  selector: "app-morse-player",
  templateUrl: "./morse-player.component.html",
  styleUrls: ["./morse-player.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorsePlayerComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() disabled: boolean;

  private context: AudioContext;
  private gain: GainNode;

  private dotDuration = 100;

  private lastTimeoutHandle: any;
  private lastText: string;

  constructor(private morseService: MorseService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.disabled) {
      this.stop();
    }

    if (this.text !== this.lastText) {
      this.lastText = this.text;
      this.playNormal();
    }
  }

  ngOnInit() {
    this.lastText = this.text;
    this.playNormal();
  }

  play() {
    const morse = this.morseService.encode(this.text);

    if (this.context == null) {
      this.context = new AudioContext();
      let oscillator = this.context.createOscillator();
      oscillator.frequency.value = 880;
      this.gain = this.context.createGain();
      this.gain.gain.setValueAtTime(0, this.context.currentTime);
      oscillator.connect(this.gain);
      this.gain.connect(this.context.destination);
      oscillator.start(0);
    }

    this.stop();
    this.lastTimeoutHandle = setTimeout(
      () => this.playSignal(this.gain, morse),
      this.dotDuration * 7
    );
  }

  playNormal() {
    if (this.disabled) {
      return;
    }
    this.dotDuration = 100;
    this.play();
  }

  playSlow() {
    if (this.disabled) {
      return;
    }
    this.dotDuration = 200;
    this.play();
  }

  stop() {
    if (this.lastTimeoutHandle != null) {
      clearTimeout(this.lastTimeoutHandle);
      this.gain.gain.setValueAtTime(0, this.context.currentTime);
    }
  }

  private playSignal(gain: GainNode, signals: Signal[]) {
    if (signals.length === 0) {
      gain.gain.setValueAtTime(0, this.context.currentTime);
      return;
    }

    if (signals[0].isHigh()) {
      gain.gain.setValueAtTime(1, this.context.currentTime);
    } else {
      gain.gain.setValueAtTime(0, this.context.currentTime);
    }

    this.lastTimeoutHandle = setTimeout(
      () => this.playSignal(gain, signals.slice(1)),
      signals[0].getDuration() * this.dotDuration
    );
  }
}
