import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from 'src/app/core/models';

@Component({
  selector: 'app-quizz-difficulty',
  templateUrl: './quizz-difficulty.component.html',
  styleUrls: ['./quizz-difficulty.component.scss']
})
export class QuizzDifficultyComponent implements OnInit {
  @Input()
  public quizz!: Quizz;

  public nbFilledStars: any[] = [];
  public nbEmptyStars: any[] = [];

  ngOnInit(): void {
    this.nbFilledStars = new Array(Math.round(this.quizz.difficulte)).fill(0);
    this.nbEmptyStars = new Array(5 - this.nbFilledStars.length).fill(0);
  }

}
