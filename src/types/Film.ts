export class Film{
  CodFilm : number
  Titolo : string
  AnnoProduzione: number
  Nazionalita: string
  Regista: string
  Genere: string
  constructor (codFilm:number, titolo:string, annoProduzione:number, nazionalita:string, regista: string, genere:string){
    this.CodFilm = codFilm;
    this.Titolo = titolo;
    this.AnnoProduzione = annoProduzione;
    this.Nazionalita = nazionalita;
    this.Regista = regista;
    this.Genere = genere;
  }

  // get CodFilm() {return this.codFilm;}
  // set CodFilm(value) {this.codFilm = value}
  // get Titolo() {return this.titolo;}
  // set Titolo(value) {this.titolo = value}
  // get AnnoProduzione() {return this.annoProduzione;}
  // get Nazionalita() {return this.nazionalita;}
  // get Regista() {return this.regista;}
  // get Genere() {return this.genere;}
}
