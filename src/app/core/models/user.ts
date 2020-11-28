import { NamedEntity } from './named-entity';

export class User extends NamedEntity<User> {
    constructor(public date: Date = new Date()) {
        super();
    }
}
