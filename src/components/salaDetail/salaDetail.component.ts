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
      this.sd.modInsSala(this.sala)
      .subscribe(res => {
         this.sala  = res
      },
      errorCode => this.errmsg = errorCode
      );
    }

    ngOnInit(): void {
      this.modifica = true;
    }
}
