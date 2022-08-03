import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGridDinamicComponent } from './background-grid-dinamic.component';

describe('BackgroundGridDinamicComponent', () => {
  let component: BackgroundGridDinamicComponent;
  let fixture: ComponentFixture<BackgroundGridDinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundGridDinamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundGridDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
