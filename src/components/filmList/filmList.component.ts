import { NavController, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private sd:ServiceDbfilmService) {}

  /*openAttoreModal(film: Attore) {
    let modal = this.modalCtrl.create(FilmDetail, film);
    modal.present();
  }

  deleteAttore(attore:Attore) {
    this.sd.delAttore(attore.CodAttore)
     .subscribe(res => {
        console.log(res);
        if (res.status==200)
          {
            this.getAttori() ;
          }
     },
     errorCode => this.errmsg = errorCode
    );
  }*/

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
    this.getFilm();
  }
}
