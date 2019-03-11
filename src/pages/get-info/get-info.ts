import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { File, IWriteOptions } from '@ionic-native/file';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Camera, CameraOptions } from '@ionic-native/camera';

const STORAGE_KEY = 'IMAGE_LIST';

@IonicPage()
@Component({
  selector: 'page-get-info',
  templateUrl: 'get-info.html',
})
export class GetInfoPage {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  @ViewChild('declaration') public signaturePadDeclaration: SignaturePad;
  @ViewChild('surveyorsig') public signaturePadSurveyorSig: SignaturePad;

  info: any;
  addinfo: any;
  campaignName: any;

  private isHeat: boolean = false;
  private isWall: boolean = false;
  private is67: boolean = false;
  private isFloorPlan: boolean = false;
  private isDSSYb: boolean = false;
  private isDeclared: boolean = false;
  private isSurveyorSig: boolean = false;

  public floorPlanImage: string;

  public photos: any;
  public photosKitchen: any;
  public photosDining: any;
  public photosLiving: any;
  public photosHallway: any;
  public photosLanding: any;
  public photosFort: any;
  public photosSide: any;
  public photosRear: any;
  public photosWater: any;
  public photosUtility: any;
  public photosLounge: any;
  public photosBathrooms: any;
  public photosCupboards: any;
  public photosConservatory: any;
  public photosStairs: any;
  public photosGarages: any;
  public photosWallThickness: any;
  public photosFused: any;
  public photosRoomStats: any;
  public photosProgrammer: any;

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController) {
    this.info = navParams.get('data');
    this.addinfo = navParams.get('data2');
    this.campaignName = navParams.get('campaignName');

    this.floorPlanImage = this.floorPlanImage;

    console.log(this.info.lead_slug);
  }

  private signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 1100,
    'canvasHeight': 500
  };


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

  openDssyB() {
    this.isDSSYb = this.isDSSYb ? true : true;
  }

  openFloorPlan() {
    this.isFloorPlan = this.isFloorPlan ? false : true;
  }

  openDeclaration() {
    this.isDeclared = this.isDeclared ? false : true;
  }

  openSurveyorSig() {
    this.isSurveyorSig = this.isSurveyorSig ? false : true;
  }

  drawClear(tag) {
    if(tag == 'floorplan') {
      this.signaturePad.clear();
    } else if(tag == 'declaration') {
      this.signaturePadDeclaration.clear();
    } else if(tag == 'surveyorsig') {
      this.signaturePadSurveyorSig.clear();
    }
  }
  drawComplete(tag) {
    if(tag == 'surveyorsig') {
      this.isSurveyorSig = this.isSurveyorSig ? false : true;
    } else if(tag == 'declaration') {
      this.isDeclared = this.isDeclared ? false : true;
    }
  }

  floorPlanComplete() {
    this.floorPlanImage = this.signaturePad.toDataURL();

    console.log(this.floorPlanImage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ngOnInit() {
    this.photos = [];
    this.photosKitchen = [];
    this.photosDining = [];
    this.photosLiving = [];
    this.photosHallway = [];
    this.photosLanding = [];
    this.photosFort = [];
    this.photosSide = [];
    this.photosRear = [];
    this.photosWater = [];
    this.photosUtility = [];
    this.photosLounge = [];
    this.photosBathrooms = [];
    this.photosCupboards = [];
    this.photosConservatory = [];
    this.photosStairs = [];
    this.photosGarages = [];
    this.photosWallThickness = [];
    this.photosFused = [];
    this.photosRoomStats = [];
    this.photosProgrammer = [];
  }

  takePhoto(tag) {
    const options: CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    if(tag == 'bedroom') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'kitchen') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosKitchen.push(this.base64Image);
        this.photosKitchen.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'dining_room') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosDining.push(this.base64Image);
        this.photosDining.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'living_room') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosLiving.push(this.base64Image);
        this.photosLiving.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'hallway') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosHallway.push(this.base64Image);
        this.photosHallway.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'landing') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosLanding.push(this.base64Image);
        this.photosLanding.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'fort_elevation') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosFort.push(this.base64Image);
        this.photosFort.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'side_elevation') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosSide.push(this.base64Image);
        this.photosSide.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'rear_elevation') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosRear.push(this.base64Image);
        this.photosRear.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'water') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosWater.push(this.base64Image);
        this.photosWater.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'utility') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosUtility.push(this.base64Image);
        this.photosUtility.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'lounge') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosLounge.push(this.base64Image);
        this.photosLounge.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'bathroom') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosBathrooms.push(this.base64Image);
        this.photosBathrooms.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'cupboard') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosCupboards.push(this.base64Image);
        this.photosCupboards.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'conservatory') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosConservatory.push(this.base64Image);
        this.photosConservatory.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'stair') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosStairs.push(this.base64Image);
        this.photosStairs.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'garage') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosGarages.push(this.base64Image);
        this.photosGarages.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'wallthickness') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosWallThickness.push(this.base64Image);
        this.photosWallThickness.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'fused') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosFused.push(this.base64Image);
        this.photosFused.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'roomstat') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosRoomStats.push(this.base64Image);
        this.photosRoomStats.reverse();
      }, (err) => {
        console.log(err);
      });
    } else if(tag == 'programmer') {
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photosProgrammer.push(this.base64Image);
        this.photosProgrammer.reverse();
      }, (err) => {
        console.log(err);
      });
    }
  }

  deletePhoto(index, tag) {
    let confirm = this.alertCtrl.create({
      title: 'Delete Photo?',
      message: 'Are you sure you want to delete this photo?',
      buttons: [
        {
          text: 'No',
          handler: () => { }
        },
        {
          text: 'Yes',
          handler: () => {
            if(tag == 'bedroom') {
              this.photos.splice(index, 1);
            } else if(tag == 'kitchen') {
              this.photosKitchen.splice(index, 1);
            } else if(tag == 'dining_room') {
              this.photosDining.splice(index, 1);
            } else if(tag == 'living_room') {
              this.photosLiving.splice(index, 1);
            } else if(tag == 'hallway') {
              this.photosHallway.splice(index, 1);
            } else if(tag == 'landing') {
              this.photosLanding.splice(index, 1);
            } else if(tag == 'fort_elevation') {
              this.photosFort.splice(index, 1);
            } else if(tag == 'side_elevation') {
              this.photosSide.splice(index, 1);
            } else if(tag == 'rear_elevation') {
              this.photosRear.splice(index, 1);
            } else if(tag == 'water') {
              this.photosWater.splice(index, 1);
            } else if(tag == 'utility') {
              this.photosUtility.splice(index, 1);
            } else if(tag == 'lounge') {
              this.photosLounge.splice(index, 1);
            } else if(tag == 'bathroom') {
              this.photosBathrooms.splice(index, 1);
            } else if(tag == 'cupboard') {
              this.photosCupboards.splice(index, 1);
            } else if(tag == 'conservatory') {
              this.photosConservatory.splice(index, 1);
            } else if(tag == 'stair') {
              this.photosStairs.splice(index, 1);
            } else if(tag == 'garage') {
              this.photosGarages.splice(index, 1);
            } else if(tag == 'wallthickness') {
              this.photosWallThickness.splice(index, 1);
            } else if(tag == 'fused') {
              this.photosFused.splice(index, 1);
            } else if(tag == 'roomstat') {
              this.photosRoomStats.splice(index, 1);
            } else if(tag == 'programmer') {
              this.photosProgrammer.splice(index, 1);
            }
          }
        }
      ]
    });
    confirm.present();
  }

}
