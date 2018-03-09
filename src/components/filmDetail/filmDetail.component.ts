import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, OnInit } from '@angular/core';
import { Film } from "../../types/Film";

@Component({
  selector: 'component-filmDetail',
  templateUrl: 'filmDetail.component.html'
})

export class FilmDetail implements OnInit {
  film : Film = this.params.get('film');
  modifica : boolean;
  errmsg: string;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private sd:ServiceDbfilmService) {}

  dismiss() {
    this.viewCtrl.dismiss();
    this.modifica = true;
  }

  salva() {
    this.sd.modInsFilm(this.film)
    .subscribe(res => {
       this.film  = res.data;
    },
    errorCode => this.errmsg = errorCode
    );
    this.dismiss();
  }

  ngOnInit(): void {
    this.modifica = this.film.Titolo!="";
  }
}
