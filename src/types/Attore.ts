export class Attore{
    CodAttore : number
    Nome : string
    AnnoNascita: number
    Nazionalita: string

    constructor(
        codAttore:number,
        nome:string,
        annoNascita: number,
        nazionalita:string
    ){
        this.CodAttore = codAttore;
        this.Nome = nome;
        this.AnnoNascita = annoNascita;
        this.Nazionalita = nazionalita;
    }
}
