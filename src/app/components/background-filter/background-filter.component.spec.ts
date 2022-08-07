import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFilterComponent } from './background-filter.component';

describe('BackgroundFilterComponent', () => {
  let component: BackgroundFilterComponent;
  let fixture: ComponentFixture<BackgroundFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
