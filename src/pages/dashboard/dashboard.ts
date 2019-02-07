import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Provider */
import { ApiProvider } from '../../providers/api/api';

/* Pages */
import { FormPage } from '../form/form';
import { GetInfoPage } from '../get-info/get-info';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api: ApiProvider) {
  }

  name: string;
  id: number;
  leads:any;

  ionViewDidLoad() {
    let data = JSON.parse(localStorage.getItem('data'));
    this.name = data.name;
    this.id = data.id;

    this.getLeadsAssigned();
  }

  getLeadsAssigned()
  {
    this.api.fetchAssignedLeads(this.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  showLead(slug)
  {
    this.api.getInfo(slug).subscribe(
      data => this.showLeadresponse(data),
      error => this.handleError(error)
    );
    console.log(slug);
  }

  showLeadresponse(data)
  {
    this.navCtrl.push(GetInfoPage, {
      data: data.data
    })
  }
  handleResponse(data1)
  {
    let data = JSON.parse(data1._body);
    this.leads = data['In_Progress'];
    console.log(this.leads);
  }

  handleError(error)
  {
    console.log(error.error);
  }

  Form()
  {
    this.navCtrl.setRoot(FormPage);
  }

}
