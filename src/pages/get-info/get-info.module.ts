import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetInfoPage } from './get-info';

@NgModule({
  declarations: [
    GetInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GetInfoPage),
  ],
})
export class GetInfoPageModule {}
