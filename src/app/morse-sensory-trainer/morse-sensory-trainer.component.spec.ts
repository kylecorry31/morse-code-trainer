import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseSensoryTrainerComponent } from './morse-sensory-trainer.component';

describe('MorseSensoryTrainerComponent', () => {
  let component: MorseSensoryTrainerComponent;
  let fixture: ComponentFixture<MorseSensoryTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorseSensoryTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseSensoryTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
