import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { HomePage } from '../pages/home/home';

import { Subject } from 'rxjs';

import { FCM } from '@ionic-native/fcm';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  activePage = new Subject();
  token: any;
  curretPage: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public fcm: FCM) {

    const firebaseConfig = {
      apiKey: "AIzaSyCDL_0ysMA7HoPt7fdk30RIOyIRfhnryX0",
      authDomain: "infinity-mobile-otp.firebaseapp.com",
      databaseURL: "https://infinity-mobile-otp.firebaseio.com",
      projectId: "infinity-mobile-otp",
      storageBucket: "infinity-mobile-otp.appspot.com",
      messagingSenderId: "935647285598"  
    };
    firebase.initializeApp(firebaseConfig);
    this.isLoggedIn();

    FCMPlugin.onNotification((data) => {
      if(data.wasTapped){
        //this.presentNotif();
        alert("New Leads");
        this.isLoggedIn();
        //Notification was received on device tray and tapped by the user.
      //  navCtrl.setRoot(DashboardPage);
      }else{
        //Notification was received in foreground. Maybe the user needs to be notified.
        //this.presentNotif();
        alert("New Leads");
        this.isLoggedIn();
        }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, active: true, icon: 'home' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;

      });
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  isLoggedIn()
  {
    if(localStorage.getItem('data'))
    {
      this.rootPage = DashboardPage;
    } else {
      this.curretPage = 'Home';
      this.rootPage = HomePage;
    }
  }
}
