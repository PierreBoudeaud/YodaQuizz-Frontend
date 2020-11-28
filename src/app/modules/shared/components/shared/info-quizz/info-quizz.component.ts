import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quizz } from 'src/app/core/models/quizz';

@Component({
  selector: 'app-info-quizz',
  templateUrl: './info-quizz.component.html',
  styleUrls: ['./info-quizz.component.scss']
})
export class InfoQuizzComponent implements OnInit {
  @Input()
  public quizz!: Quizz;

  @Output()
  public showQuizzEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  showQuizz(): void {
    this.showQuizzEvent.emit(this.quizz.id);
  }
}
