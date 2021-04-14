export class Expense {
    constructor( 
        public id: number, 
        public date: string, 
        public store: string, 
        public price: number, 
        public comments: string
    ) {}
}