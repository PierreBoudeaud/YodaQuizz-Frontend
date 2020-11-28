import { DescriptionEntity } from './description-entity';

export class Theme extends DescriptionEntity<Theme> {
    constructor(public icon: string = '') {
        super();
    }
}