import { Identifiable } from './identifiable';
import { Reponse } from './reponse';

export class Question extends Identifiable<Question> {
    constructor(
        public intitule: string = '',
        public dateCrea: Date = new Date(),
        public dateModif: Date = new Date(),
        public image: string = '',
        public reponses: Reponse[] = [],
        ) {
        super();
    }
}