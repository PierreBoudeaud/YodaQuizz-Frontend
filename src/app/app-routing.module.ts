import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'quizz',
    loadChildren: () => import('./modules/quizz/quizz.module').then(mod => mod.QuizzModule),
  },
  {
    path: '**', redirectTo: 'quizz',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
