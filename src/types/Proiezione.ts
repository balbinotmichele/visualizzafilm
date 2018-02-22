import {Film} from "./Film";
import { DateTime } from "ionic-angular";

export class Proiezione{
  constructor(
      private codAttore : number,
      private codFilm : number,
      private codSala : number,
      private incasso : number,
      private dataProiezione: DateTime
      ){
  }

  get CodAttore() {return this.codAttore;}
  get CodFilm() {return this.codFilm;}
  get CodSala() {return this.codSala;}
  get Incasso() {return this.incasso;}
  get DataProiezione() {return this.dataProiezione;}
}
