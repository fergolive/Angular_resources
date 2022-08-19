import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMenuSliderComponent } from './slider-menu-slider.component';

describe('SliderMenuSliderComponent', () => {
  let component: SliderMenuSliderComponent;
  let fixture: ComponentFixture<SliderMenuSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMenuSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMenuSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
