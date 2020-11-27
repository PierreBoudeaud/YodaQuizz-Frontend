import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizz } from 'src/app/core/models/quizz';
import { QuizzService } from 'src/app/core/services/quizz.service';

@Component({
  selector: 'app-list-quizz',
  templateUrl: './list-quizz.component.html',
  styleUrls: ['./list-quizz.component.scss']
})
export class ListQuizzComponent implements OnInit {
  public quizz$: Observable<Quizz[]>;

  constructor(public quizzService: QuizzService) {
    this.quizz$ = this.quizzService.getAll();
  }

  ngOnInit(): void {
  }

}
