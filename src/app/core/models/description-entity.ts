import { NamedEntity } from './named-entity';

export abstract class DescriptionEntity<T> extends NamedEntity<T> {
    constructor(public description: string = '') {
        super();
    }
}