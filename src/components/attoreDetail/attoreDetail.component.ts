import { Attore } from './../../types/Attore';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-attoreDetail',
  templateUrl: 'attoreDetail.component.html'
})

export class AttoreDetail implements OnInit {
  attore : Attore = this.params.get('attore');
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
    this.sd.modInsAttore(this.attore)
    .subscribe(res => {
       this.attore  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  ngOnInit(): void {
    this.modifica = true;
  }
}
