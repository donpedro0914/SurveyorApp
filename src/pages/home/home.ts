import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

/* Pages */
import { DashboardPage } from '../dashboard/dashboard';

/* Provider */
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = {
    token: null,
    name: null
  };

  public loadingLogIn;
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public api: ApiProvider,
              public loadingCtrl: LoadingController
  ) {
    this.loadingLogIn = loadingCtrl.create({
      content: 'Logging in...'
    });
  }

  ionViewDidLoad()
  {
    let data = JSON.parse(localStorage.getItem('data'));
    if(data)
    this.api.check(data.token).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  send(phoneNumber)
  {
    console.log(phoneNumber);
    this.api.login(phoneNumber).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data)
  {
    if(data.success) {
      this.loadingLogIn.present();
      this.data.token = data.token;
      this.data.name = data.name;
      localStorage.setItem('data', JSON.stringify(this.data));
      setTimeout(() => {
        this.loadingLogIn.dismiss();
      }, 3000);
      this.navCtrl.setRoot(DashboardPage);
      
    }
    else
      console.log('not found');
  }

  handleError(error)
  {
    console.log(error.error);
  }

}
