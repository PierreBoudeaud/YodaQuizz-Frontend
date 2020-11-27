import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from 'src/app/core/models/quizz';

@Component({
  selector: 'app-info-quizz',
  templateUrl: './info-quizz.component.html',
  styleUrls: ['./info-quizz.component.scss']
})
export class InfoQuizzComponent implements OnInit {
  @Input()
  public quizz!: Quizz;

  ngOnInit(): void {
  }

}
