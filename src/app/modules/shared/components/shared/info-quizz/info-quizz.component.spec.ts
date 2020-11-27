import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoQuizzComponent } from './info-quizz.component';

describe('InfoQuizzComponent', () => {
  let component: InfoQuizzComponent;
  let fixture: ComponentFixture<InfoQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoQuizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
