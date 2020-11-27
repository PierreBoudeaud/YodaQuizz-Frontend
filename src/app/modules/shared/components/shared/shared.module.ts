import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuizzComponent } from './list-quizz/list-quizz.component';
import { InfoQuizzComponent } from './info-quizz/info-quizz.component';
import { QuizzImageComponent } from './quizz-image/quizz-image.component';



@NgModule({
  declarations: [
    ListQuizzComponent,
    InfoQuizzComponent,
    QuizzImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListQuizzComponent,
    InfoQuizzComponent,
  ]
})
export class SharedModule { }
