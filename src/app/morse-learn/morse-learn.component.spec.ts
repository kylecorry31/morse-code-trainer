import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseLearnComponent } from './morse-learn.component';

describe('MorseLearnComponent', () => {
  let component: MorseLearnComponent;
  let fixture: ComponentFixture<MorseLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
