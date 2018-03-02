import { Attore } from './../../types/Attore';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-attoreDetail',
  templateUrl: 'attoreDetail.component.html'
})

export class AttoreDetail {
  attore : Attore = this.params.get('attore');

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
