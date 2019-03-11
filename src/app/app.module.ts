import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

/* Pages */
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FormPage } from '../pages/form/form';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GetInfoPage } from '../pages/get-info/get-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';

/* Addtl Plugin */
import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';
import { HttpModule } from '@angular/http';
import { SharedobjectserviceProvider } from '../providers/sharedobjectservice/sharedobjectservice';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    FormPage,
    GetInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    FormPage,
    GetInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    ApiProvider,
    FCM,
    Firebase,
    SharedobjectserviceProvider
  ]
})
export class AppModule {}
