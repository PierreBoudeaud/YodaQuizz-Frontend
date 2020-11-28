import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzDifficultyComponent } from './quizz-difficulty.component';

describe('QuizzDifficultyComponent', () => {
  let component: QuizzDifficultyComponent;
  let fixture: ComponentFixture<QuizzDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
