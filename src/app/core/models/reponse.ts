import { NamedEntity } from './named-entity';

export class Reponse extends NamedEntity<Reponse> {
    constructor(
        public dateCrea: Date = new Date(),
        public correct: boolean = false,
        ) {
        super();
    }
}