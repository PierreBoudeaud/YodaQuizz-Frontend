import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from 'src/app/core/models/quizz';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {

  @Input()
  public quizz!: Quizz;

  constructor() { }

  ngOnInit(): void {
  }

}
