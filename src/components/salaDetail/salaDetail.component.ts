import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Sala } from '../../types/Sala';

@Component({
  selector: 'component-salaDetail',
  templateUrl: 'salaDetail.component.html'
})

export class SalaDetail {
  sala : Sala = this.params.get('sala');

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
