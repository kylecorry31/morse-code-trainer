import { TestBed } from "@angular/core/testing";

import { MorseService } from "./morse-service.service";

describe("MorseServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MorseService = TestBed.get(MorseService);
    expect(service).toBeTruthy();
  });
});
