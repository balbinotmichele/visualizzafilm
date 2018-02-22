export class Film{
  constructor(
      private codFilm : number,
      private titolo : string,
      private annoProduzione: number,
      private nazionalita: string,
      private regista: string,
      private genere: string,
  ){
  }

  get CodFilm() {return this.codFilm;}
  get Titolo() {return this.titolo;}
  get AnnoProduzione() {return this.annoProduzione;}
  get Nazionalita() {return this.nazionalita;}
  get Regista() {return this.regista;}
  get Genere() {return this.genere;}
}
