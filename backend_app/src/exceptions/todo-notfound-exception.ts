import {NotFoundException} from "@nestjs/common";

export class TodoNotfoundException extends NotFoundException {

    constructor() {
        super('Todo not found');
    }
}

export class CalNotfoundException extends NotFoundException {

    constructor() {
        super('not found');
    }
}