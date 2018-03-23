import { Attore } from './../../types/Attore';
import { NavController, Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, OnInit } from '@angular/core';
import { Recita } from '../../types/Recita';
import { Film } from '../../types/Film';

@Component({
  selector: 'component-attoreDetail',
  templateUrl: 'attoreDetail.component.html'
})

export class AttoreDetail implements OnInit {

  attore : Attore = this.params.get('attore');
  thisattore = Object.assign({}, this.attore);
  modifica : boolean;
  errmsg: string;

  recitaIn : string[];
  listFilm : Film[];
  modificaFilm : boolean;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private sd:ServiceDbfilmService,
    public alertCtrl: AlertController) {}

  getRecitaIn() {
    this.sd.getRecita(this.thisattore)
    .subscribe(res => {
       this.recitaIn  = res.map(x => x["Titolo"])
    },
    errorCode => this.errmsg = errorCode
    );

    this.sd.getFilm()
    .subscribe(res => {
       this.listFilm  = res
    },
    errorCode => this.errmsg = errorCode
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.modifica = true;
  }

  salva() {
    this.attore = Object.assign({}, this.thisattore);
    this.sd.modInsAttore(this.attore)
    .subscribe(res => {
       this.attore  = res.data
    },
    errorCode => this.errmsg = errorCode
    );
    this.dismiss();
  }

  modFilm() {
    this.modificaFilm = false;

    let alert = this.alertCtrl.create();
    alert.setTitle("Seleziona i film con l'attore " + this.thisattore.Nome);

    for(let i = 0; i< this.listFilm.length; i++) {
      alert.addInput({
        type: 'checkbox',
        label: this.listFilm[i].Titolo,
        value: this.listFilm[i].CodFilm.toString(),
        checked: this.recitaIn.indexOf(this.listFilm[i].Titolo) >= 0
      });
    }

    alert.addButton('Annulla');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  salvaFilm() {

  }

  annullaFilm() {

  }

  annulla() {
    this.thisattore = Object.assign({}, this.attore);
    this.dismiss();
  }

  ngOnInit(): void {
    this.getRecitaIn();
    this.modifica = this.attore.Nome!="";
    this.modificaFilm = this.attore.Nome!="";
  }
}
