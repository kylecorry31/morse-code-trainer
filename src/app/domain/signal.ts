export class Signal {
  private _high: boolean;
  private _duration: number;

  constructor(high: boolean, duration: number) {
    this._high = high;
    this._duration = duration;
  }

  isHigh(): boolean {
    return this._high;
  }

  getDuration(): number {
    return this._duration;
  }
}
