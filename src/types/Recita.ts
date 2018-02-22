import {Attore} from "./Attore";
import {Film} from "./Film"

export class Recita{
  constructor(
      private codFilm : number,
      private codAttore : number
  ){}

  get CodAttore() {return this.codAttore;}
  get CodFilm() {return this.codFilm;}
}
