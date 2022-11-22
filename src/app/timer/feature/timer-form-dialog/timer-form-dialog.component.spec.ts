import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFormDialogComponent } from './timer-form-dialog.component';

describe('TimerFormDialogComponent', () => {
  let component: TimerFormDialogComponent;
  let fixture: ComponentFixture<TimerFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
