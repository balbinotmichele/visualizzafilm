import { NavController, ModalController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../types/Film';
import { FilmDetail } from "./../filmDetail/filmDetail.component";
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'component-filmlist',
  templateUrl: 'filmList.component.html',
  styles: [`
  .my-pagination /deep/ .ngx-pagination .current {
    background: #32db64;
  }
  .my-pagination {
    font-size: 17px !important;
  }
  `]
})

export class FilmList {
  data : Film[];
  lista : Film[];

  p: number = 1;
  num : number = 10;

  scelta : Film;
  nuovo : Film  = new Film(0, "", 0, "", "","");

  errmsg: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private sd:ServiceDbfilmService) {}

  openFilmModal (film: Film) {
    let modal = this.modalCtrl.create(FilmDetail, film);
    modal.onDidDismiss(() => {this.getFilm(); this.nuovo = new Film(0, "", 0, "", "","")});
    modal.present();
  }

  deleteFilm(film:Film) {
    this.sd.delFilm(film.CodFilm)
     .subscribe(res => {
        console.log(res);
        if (res.status==200)
          {
            this.getFilm();
          }
     },
     errorCode => this.errmsg = errorCode
    );
  }

  getFilm(){
    this.sd.getFilm()
    .subscribe(res => {
      console.log(res);
       this.lista  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  itemSelected(item:Film) {
    this.scelta = item;
  }

  ngOnInit() {
    this.num = 10;
    this.getFilm();
  }
}

