import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMAGE_ENDPOINT } from 'src/app/core/constants/paths';
import { Quizz } from 'src/app/core/models/quizz';
import { QuizzService } from 'src/app/core/services/quizz.service';

@Component({
  selector: 'app-quizz-image',
  templateUrl: './quizz-image.component.html',
  styleUrls: ['./quizz-image.component.scss']
})
export class QuizzImageComponent implements OnInit {
  public ENDPOINT: string = IMAGE_ENDPOINT;

  @Input()
  public quizzId!: string;

  public quizz$!: Observable<Quizz>;

  constructor(private quizzService: QuizzService) {

  }

  ngOnInit(): void {
    this.quizz$ = this.quizzService.getById(this.quizzId);
  }

}
