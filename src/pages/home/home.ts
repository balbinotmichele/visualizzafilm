import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Film } from '../../types/Film';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Attore } from '../../types/Attore';
import { Sala } from '../../types/Sala';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabelle : string[] = ["Film", "Attori", "Sale"];

  scelta : string = "Film";

  listaFilm : Film[];
  listaAttori : Attore[];
  listaSale : Sala[];

  errmsg : string;

  constructor(public navCtrl: NavController, private sd:ServiceDbfilmService) {}
}
