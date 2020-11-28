import { Identifiable } from './identifiable';

export abstract class NamedEntity<T> extends Identifiable<T> {
    constructor(public nom: string = '', public description: string = '') {
        super();
    }
}
