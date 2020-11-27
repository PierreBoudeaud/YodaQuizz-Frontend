import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyQuizzComponent } from './my-quizz/my-quizz.component';

const routes: Routes = [
    {
        path: '',
        component: MyQuizzComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizzRoutingModule {
}
