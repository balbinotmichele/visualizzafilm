export class Sala{
  CodSala : number
  Posti : number
  Nome: string
  Citta: string
  constructor(
     codSala:number, posti: number, nome: string, citta: string
  ){
    this.CodSala = codSala;
    this.Posti = posti;
    this.Nome = nome;
    this.Citta = citta;
  }
}
