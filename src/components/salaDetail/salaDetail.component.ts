import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Sala } from '../../types/Sala';

@Component({
  selector: 'component-salaDetail',
  templateUrl: 'salaDetail.component.html'
})

export class SalaDetail implements OnInit{
  sala : Sala = this.params.get('sala');
  thissala = Object.assign({}, this.sala);

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
      this.sala = Object.assign({}, this.thissala);
      this.sd.modInsSala(this.sala)
      .subscribe(res => {
         this.sala  = res.data
      },
      errorCode => this.errmsg = errorCode
      );
      this.dismiss();
    }

    annulla() {
      this.thissala = Object.assign({}, this.sala);
      this.dismiss();
    }


    ngOnInit(): void {
      this.modifica = this.sala.Nome!="";
    }
}
