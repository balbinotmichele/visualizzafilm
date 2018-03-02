import { NavController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../types/Film';

@Component({
  selector: 'component-filmlist',
  templateUrl: 'filmList.component.html'
})

export class FilmList {
  lista : Film[];

  scelta : Film;

  errmsg: string;

  constructor(public navCtrl: NavController, private sd:ServiceDbfilmService) {}

  getFilm(){
    this.sd.getFilm()
    .subscribe(res => {
       this.lista  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  itemSelected(item:Film) {
    this.scelta = item;
  }

  ngOnInit() {

  }
}
