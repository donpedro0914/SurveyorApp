import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Provider */
import { ApiProvider } from '../../providers/api/api';

/* Pages */
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
  leads2:any;
  completelead:any;

  ionViewDidLoad() {
    let data = JSON.parse(localStorage.getItem('data'));
    this.name = data.name;
    this.id = data.id;

    let leads = localStorage.getItem('leads');

    console.log(leads);

    this.getLeadsAssigned();
  }

  getLeadsAssigned()
  {
    this.api.fetchAssignedLeads(this.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  showLead(slug, campaignName)
  {
    this.api.getInfo(slug).subscribe(
      data => this.showLeadresponse(data, campaignName),
      error => this.handleError(error)
    );
    // console.log(slug);
  }

  showLeadresponse(data, campaignName)
  {
    let data1 = JSON.parse(data._body);
    let data2 = JSON.parse(data1.Leads[0].additional_fields);
    
    this.navCtrl.push(GetInfoPage, {
      data: data1.Leads[0],
      campaignName: campaignName,
      data2: data2
    });

    console.log(campaignName);
  }
  handleResponse(data1)
  {
    let data = JSON.parse(data1._body);
    this.leads = data['In_Progress'];
    this.leads2 = data['New_Leads'];
    this.completelead = data['Completed'];
  }

  handleError(error)
  {
    console.log(error.error);
  }

}
