import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import { MorseService } from "../morse-service.service";
import { Signal } from "../domain/signal";
import { MorseSymbol } from "../domain/morse-symbol";

@Component({
  selector: "app-morse-player",
  templateUrl: "./morse-player.component.html",
  styleUrls: ["./morse-player.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorsePlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() showHints: boolean = false;

  private context: AudioContext;
  private gain: GainNode;

  private dotDuration = 100;

  private lastTimeoutHandle: any;
  private lastText: string;

  symbols: MorseSymbol[][];

  Dot = MorseSymbol.Dot;
  Dash = MorseSymbol.Dash;

  constructor(private morseService: MorseService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.disabled) {
      this.stop();
    }

    if (this.text !== this.lastText) {
      this.lastText = this.text;
      this.symbols = this.morseService.encodeSymbols(this.text);
      this.playNormal();
    }
  }

  ngOnInit() {
    this.lastText = this.text;
    this.playNormal();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  play() {
    const morse = this.morseService.encode(this.text);

    if (this.context == null || this.context.state === "suspended") {
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
    const changeTime = 0.005;

    if (signals.length === 0) {
      gain.gain.cancelScheduledValues(this.context.currentTime);
      gain.gain.setTargetAtTime(0, this.context.currentTime, changeTime);
      return;
    }

    if (signals[0].isHigh()) {
      gain.gain.cancelScheduledValues(this.context.currentTime);
      gain.gain.setTargetAtTime(1, this.context.currentTime, changeTime);
    } else {
      gain.gain.cancelScheduledValues(this.context.currentTime);
      gain.gain.setTargetAtTime(0, this.context.currentTime, changeTime);
    }

    this.lastTimeoutHandle = setTimeout(
      () => this.playSignal(gain, signals.slice(1)),
      signals[0].getDuration() * this.dotDuration
    );
  }
}
