import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FilmList } from "../components/filmList/filmList.component"
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceDbfilmService } from '../../services/service-dbfilm.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AttoriList } from '../components/attoriList/attoriList.component';
import { AttoreDetail } from "../components/attoreDetail/attoreDetail.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FilmList,
    AttoriList,
    AttoreDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FilmList,
    AttoriList,
    AttoreDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDbfilmService,
  ]
})
export class AppModule {}
