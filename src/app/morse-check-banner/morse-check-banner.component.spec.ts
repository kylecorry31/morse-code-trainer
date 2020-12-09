import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MorseCheckBannerComponent } from './morse-check-banner.component';

describe('MorseCheckBannerComponent', () => {
  let component: MorseCheckBannerComponent;
  let fixture: ComponentFixture<MorseCheckBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseCheckBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseCheckBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
