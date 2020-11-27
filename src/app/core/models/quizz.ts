import { Identifiable } from './identifiable';

export class Quizz extends Identifiable<Quizz> {
    constructor(public nom: string, public description: string, public version: number, public difficulte: number, public valid: boolean, public someImagesOfQuestions: string[]) {
        super();
    }
}
