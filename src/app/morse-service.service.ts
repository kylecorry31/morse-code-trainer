import { Injectable } from "@angular/core";
import { Signal } from "./domain/signal";
import { MorseLetterMapper } from "./domain/morse-letter-mapper";
import { MorseSymbol } from "./domain/morse-symbol";

@Injectable({
  providedIn: "root",
})
export class MorseService {
  private letterMapper = new MorseLetterMapper();

  constructor() {}

  encode(text: string): Signal[] | null {
    const letters: string[] = [];
    for (let letter of text) {
      letters.push(letter);
    }

    const rawMapped = letters.map((it) => this.encodeLetter(it));
    const mapped = rawMapped.filter((it) => it != null);
    if (rawMapped.length != mapped.length) {
      return null;
    }

    return mapped
      .map((value, index) => {
        if (
          index == 0 ||
          this.equals(value, [new Signal(false, 7)]) ||
          this.equals(mapped[index - 1], [new Signal(false, 7)])
        ) {
          return value;
        } else {
          return [[new Signal(false, 3)], value].flat();
        }
      })
      .flat();
  }

  private encodeLetter(letter: string): Signal[] | null {
    if (letter == " ") {
      return [new Signal(false, 7)];
    }
    const mapped = this.letterMapper.map(letter);
    if (mapped == null) {
      return null;
    }

    return mapped
      .map((value, index) => {
        if (index == 0) {
          return [this.mapSymbol(value)];
        } else {
          return [new Signal(false, 1), this.mapSymbol(value)];
        }
      })
      .flat();
  }

  private mapSymbol(symbol: MorseSymbol): Signal {
    return symbol == MorseSymbol.Dot
      ? new Signal(true, 1)
      : new Signal(true, 3);
  }

  private equals(a: Signal[], b: Signal[]): boolean {
    if (a.length !== b.length) return false;

    for (var i in a) {
      if (a[i].getDuration() !== b[i].getDuration()) return false;
      if (a[i].isHigh() !== b[i].isHigh()) return false;
    }

    return true;
  }
}
