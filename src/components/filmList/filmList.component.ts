import { NavController, ModalController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../types/Film';
import { FilmDetail } from "./../filmDetail/filmDetail.component";

@Component({
  selector: 'component-filmlist',
  templateUrl: 'filmList.component.html'
})

export class FilmList {
  data : Film[];
  lista : Film[];

  lim: number = 5;
  num : number = 5;

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
    this.sd.getFilm(this.lim, this.num)
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

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.sd.getFilm(this.lim, this.num)
         .subscribe(
           res => {
             this.data = res;
             for(let i=0; i<this.data.length; i++) {
               this.lista.push(this.data[i]);
             }
           },
           error =>  this.errmsg = <any>error);
      this.lim += this.num;
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
}

