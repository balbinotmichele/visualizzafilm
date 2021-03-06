import { NavController, ModalController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';
import { Sala } from '../../types/Sala';
import { SalaDetail } from '../salaDetail/salaDetail.component';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'component-salelist',
  templateUrl: 'saleList.component.html',
  styles: [`
  .my-pagination /deep/ .ngx-pagination .current {
    background: #32db64;
  }
  .my-pagination {
    font-size: 17px !important;
  }
  `]
})

export class SaleList {
  lista : Sala[];

  scelta : Sala;
  nuovo : Sala = new Sala(0, 0, "", "");

  p: number = 1;
  num : number = 10;

  errmsg : string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private sd:ServiceDbfilmService) {}

  getSale() {
    this.sd.getSale()
    .subscribe(res => {
       this.lista  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  ngOnInit() {
    this.num = 10;
    this.getSale();
  }

  openSalaModal(sala: Sala) {
    let modal = this.modalCtrl.create(SalaDetail, sala);
    modal.onDidDismiss(() => {this.getSale(); this.nuovo = new Sala(0, 0, "", "")});
    modal.present();
  }

  deleteSala(sala:Sala) {
    this.sd.delSala(sala.CodSala)
     .subscribe(res => {
        console.log(res);
        if (res.status==200)
          {
            this.getSale() ;
          }
     },
     errorCode => this.errmsg = errorCode
    );
  }
}
