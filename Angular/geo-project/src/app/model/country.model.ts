export class Country{
    constructor(
        // public ctr_id: string,
        public ctr_name: string,
        public ctr_pPl: number,
        public ctr_states: [
            { st_name: string, st_pPl: number}
        ]
    ){}
}