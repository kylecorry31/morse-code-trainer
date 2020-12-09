import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MorsePlayerComponent } from './morse-player.component';

describe('MorsePlayerComponent', () => {
  let component: MorsePlayerComponent;
  let fixture: ComponentFixture<MorsePlayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MorsePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorsePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
