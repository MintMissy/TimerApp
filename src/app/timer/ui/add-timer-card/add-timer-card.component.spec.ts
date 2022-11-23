import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimerCardComponent } from './add-timer-card.component';

describe('AddTimerCardComponent', () => {
  let component: AddTimerCardComponent;
  let fixture: ComponentFixture<AddTimerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
