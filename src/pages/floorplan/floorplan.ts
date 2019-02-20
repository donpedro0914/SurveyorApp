import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController, ViewController, ModalController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { GetInfoPage } from '../get-info/get-info';

@Component({
  selector: 'page-floorplan',
  templateUrl: 'floorplan.html',
})
export class FloorplanPage {
@ViewChild(SignaturePad) public signaturePad: SignaturePad;

info:any;

  constructor(public navParams: NavParams, public navController: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.info = navParams.get('data');

    console.log(this.info.slug);
  }

  public floorPlanImage: string;
  
  private signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 1100,
    'canvasHeight': 500
  };

  ngAfterViewInit() {
    this.signaturePad.clear();
  }

  floorPlanComplete(){
    this.floorPlanImage = this.signaturePad.toDataURL();
    this.navController.push(GetInfoPage, {floorPlanImage: this.floorPlanImage});
  }

  floorPlanClear() {
    this.signaturePad.clear();
  }

  floorPlanCancel() {
    // this.navController.push(GetInfoPage, {floorPlanImage: ''});
    // let data = { }
    this.modalCtrl.dismiss();
  }

}
