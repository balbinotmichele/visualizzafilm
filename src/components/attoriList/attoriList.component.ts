import { Attore } from './../../types/Attore';
import { NavController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-attorilist',
  templateUrl: 'attoriList.component.html'
})

export class AttoriList {
  @Input() lista : Attore[];

  scelta : Attore;
  constructor(public navCtrl: NavController, private sd:ServiceDbfilmService) {

  }

  itemSelected(item:Attore) {
    this.scelta = item;
  }

  ngOnInit() {

  }
}
