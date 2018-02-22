export class Attore{
    constructor(
        private codAttore : number,
        private nome : string,
        private annoNascita: number,
        private nazionalita: string,
    ){
    }

    get CodAttore() {return this.codAttore;}
    get Nome() {return this.nome;}
    get AnnoNascita() {return this.annoNascita;}
    get Nazionalita() {return this.nazionalita;}
}
