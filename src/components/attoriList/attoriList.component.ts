import { AttoreDetail } from './../attoreDetail/attoreDetail.component';
import { Attore } from './../../types/Attore';
import { NavController, ModalController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-attorilist',
  templateUrl: 'attoriList.component.html'
})

export class AttoriList implements OnInit{
  lista : Attore[];

  scelta : Attore;

  errmsg : string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private sd:ServiceDbfilmService) {}

  openAttoreModal(attore: Attore) {
    let modal = this.modalCtrl.create(AttoreDetail, attore);
    modal.present();
  }

  deleteAttore(attore:Attore) {
    this.sd.delAttore(attore.CodAttore)
     .subscribe(res => {
        console.log(res);
        if (res.status==200)
          {
            this.getAttori() ;
          }
     },
     errorCode => this.errmsg = errorCode
    );
  }

  ngOnInit(): void {
    this.getAttori();
  }

  getAttori(){
    this.sd.getAttori()
    .subscribe(res => {
       this.lista  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }
}
