import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MorseTextEntryComponent } from './morse-text-entry.component';

describe('MorseTextEntryComponent', () => {
  let component: MorseTextEntryComponent;
  let fixture: ComponentFixture<MorseTextEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseTextEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseTextEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
