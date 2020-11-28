import { DescriptionEntity } from './description-entity';
import { Question } from './question';
import { Theme } from './theme';
import { Type } from './type';
import { User } from './user';

export class Quizz extends DescriptionEntity<Quizz> {
    constructor(
        public version: number = 0,
        public difficulte: number = 0,
        public valid: boolean = false,
        public someImagesOfQuestions: string[] = [],
        public dateCrea: Date = new Date(),
        public dateModif: Date = new Date(),
        public createur: User = new User(),
        public themes: Theme[] = [],
        public type: Type = new Type(),
        public questions: Question[] = [],
        ) {
        super();
    }
}
