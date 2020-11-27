import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzRoutingModule } from './quizz-routing.module';
import { SharedModule } from '../shared/components/shared/shared.module';
import { MyQuizzComponent } from './my-quizz/my-quizz.component';



@NgModule({
  declarations: [
    MyQuizzComponent,
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    SharedModule,
  ]
})
export class QuizzModule { }
