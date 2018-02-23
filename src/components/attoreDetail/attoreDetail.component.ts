import { Attore } from './../../types/Attore';
import { NavController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-attoreDetail',
  templateUrl: 'attoreDetail.component.html'
})

export class AttoreDetail {
  @Input() attore : Attore;

  constructor(public navCtrl: NavController) {

  }
}
