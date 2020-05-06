import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseQuizComponent } from './morse-quiz.component';

describe('MorseQuizComponent', () => {
  let component: MorseQuizComponent;
  let fixture: ComponentFixture<MorseQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
