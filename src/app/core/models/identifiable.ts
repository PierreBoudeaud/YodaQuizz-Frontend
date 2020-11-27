import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IIdentifiable } from './iidentifiable';

export abstract class Identifiable<T> implements IIdentifiable<T> {
    constructor(public id: string = '') {}

    clone(cloneInstance: T): T {
        Object.assign(cloneInstance, this);
        return cloneInstance;
    }
}
