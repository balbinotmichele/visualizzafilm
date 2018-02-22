import { NavController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../types/Film';

@Component({
  selector: 'component-filmlist',
  templateUrl: 'filmList.component.html'
})

export class FilmList {
  @Input() lista : Film[];

  scelta : Film;
  constructor(public navCtrl: NavController, private sd:ServiceDbfilmService) {

  }

  itemSelected(item:Film) {
    this.scelta = item;
  }

  ngOnInit() {

  }
}
