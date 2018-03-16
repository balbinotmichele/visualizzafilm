import { NavController, ModalController } from 'ionic-angular';
import { ServiceDbfilmService } from '../../../services/service-dbfilm.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Film } from '../../types/Film';

@Component({})
export class NewsFeedPage {
  @Input() page:number;
  @Input() nPages:number;
  @Output() onClick = new EventEmitter<number>();
  
  pages=[];
  pageStart=1;
  maxPages=3;
  
  constructor() { 
  }


  ngOnInit() {
    console.log(this.nPages);
    var i;
    //for(i=1;i<this.nPages+1;i++)
      //this.pages.push(i);
    this.pages=  this.fillArray();
    console.log(this.pages)  ;
  }

  fillArray(): any{
    var obj = new Array();

    for(var index = this.pageStart; index< this.pageStart + this.maxPages; index ++) {
                obj.push(index);
    }
    return obj;
  }

  onPrevious(){
    if(this.page>1) {
      +this.page--;
      if(this.page < this.pageStart){
        this.pageStart = this.page;
      }
      this.pages=  this.fillArray();
      this.onClick.emit(this.page);
      console.log(this.page);
    }
  }
  
  onNext(){
    console.log(this.page);   
     console.log(this.nPages);
    
    if(this.page<(this.nPages)) {
      +this.page++;
      if(this.page >= (this.pageStart + this.maxPages)){
        this.pageStart = this.page - this.maxPages + 1;
      }
      this.pages=  this.fillArray();
      this.onClick.emit(this.page);
      console.log(this.page);
    }
  }
  
  onPage(page:number){
    this.page=page;
    console.log(this.page);
    this.onClick.emit(this.page);
   
  }
}