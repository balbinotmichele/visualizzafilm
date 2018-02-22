import { AttoriList } from './../../components/attoriList/attoriList.component';
import { FilmList } from './../../components/filmList/filmList.component';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Film } from '../../types/Film';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Attore } from '../../types/Attore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  tabelle : string[] = ["Film", "Attori"];

  scelta : string;

  listaFilm : Film[];
  listaAttori : Attore[];

  errmsg : string;

  constructor(public navCtrl: NavController, private sd:ServiceDbfilmService) {}

  ngOnInit(): void {
    this.getFilm();
    this.getAttori();
  }

  getFilm(){
    this.sd.getFilm()
    .subscribe(res => {
       this.listaFilm  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  getAttori(){
    this.sd.getAttori()
    .subscribe(res => {
       this.listaAttori  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  itemSelected(item:string) {
    this.scelta = item;
  }

}
