import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform, normalizeURL, ModalController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { File, IWriteOptions  } from '@ionic-native/file';
import { FloorplanPage } from '../floorplan/floorplan';

const STORAGE_KEY = 'IMAGE_LIST';

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
  private is67: boolean = false;

  public floorPlanImage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    this.info = navParams.get('data');
    this.addinfo = navParams.get('data2');
    this.campaignName = navParams.get('campaignName');

    this.floorPlanImage = navParams.get('floorPlanImage');

    console.log(this.info.lead_slug);
  }

  
  ionViewDidLoad() {
  }

  showHeat() {
    this.isHeat = this.isHeat ? true : true;
  }

  showWall() {
    this.isWall = this.isWall ? true : true;
  }

  show67() {
    this.is67 = this.is67 ? true : true;
  }

  openFloorPlanModel() {
    var data = { slug: this.info.lead_slug, campaignName: this.campaignName };

    let modal = this.modalController.create(FloorplanPage, data, { cssClass: 'modal-fullscreen' });
    modal.onDidDismiss(data => {
      console.log(data);
    })

    modal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
