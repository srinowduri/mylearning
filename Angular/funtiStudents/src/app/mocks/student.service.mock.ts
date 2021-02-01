import { Injectable } from '@angular/core';

@Injectable()
export class StudentServiceMock {
    constructor() {}

    getStudent() {
        return [
            {
                id: 0,
                name: 'ABC',
                level: 'Basics',
                email: 'hgdzf@gmail.com',
                phone: '8784561899'
            }
        ]
    }
}
