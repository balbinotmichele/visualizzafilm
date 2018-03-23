export class Recita{
  CodAttore : number
  CodFlim : number

  constructor(
     codAttore:number, codFilm: number
  ){
    this.CodAttore = codAttore;
    this.CodFlim = codFilm;
  }
  
  toString() : string {
    return this.CodAttore.toString() + "," + this.CodFlim.toString();
  }
}
