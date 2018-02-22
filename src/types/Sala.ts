export class Sala{
  constructor(
      private codSala : number,
      private posti : number,
      private nome: string,
      private citta: string,
  ){
  }

  get CodSala() {return this.codSala;}
  get Nome() {return this.nome;}
  get Posti() {return this.posti;}
  get Citta() {return this.citta;}
}
