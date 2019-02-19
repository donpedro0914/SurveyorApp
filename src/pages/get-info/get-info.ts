import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-info',
  templateUrl: 'get-info.html',
})
export class GetInfoPage {

  info:any;
  addinfo:any;
  campaignName:any;

  private isHeat: boolean = false;
  private isWall: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = navParams.get('data');
    this.addinfo = navParams.get('data2');
    this.campaignName = navParams.get('campaignName');

    // console.log(this.info);
  }


  ionViewDidLoad() {
    
  }

  showHeat() {
    this.isHeat = this.isHeat ? false : true;
  }

  showWall() {
    this.isWall = this.isWall ? false : true;
  }

}
