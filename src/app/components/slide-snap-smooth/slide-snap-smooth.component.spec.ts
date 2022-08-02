import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSnapSmoothComponent } from './slide-snap-smooth.component';

describe('SlideSnapSmoothComponent', () => {
  let component: SlideSnapSmoothComponent;
  let fixture: ComponentFixture<SlideSnapSmoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideSnapSmoothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSnapSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
