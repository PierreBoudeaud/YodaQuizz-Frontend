import { DescriptionEntity } from './description-entity';

export class Type extends DescriptionEntity<Type> {
    constructor(public icon: string = '') {
        super();
    }
}