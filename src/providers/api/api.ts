import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  public loadingLogIn;
  public headers = new Headers(
  {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Content-Type' : 'application/json'
  });
  
  public options = new RequestOptions({ headers: this.headers });

  private baseurl = 'https://app.infinityenergyorganisation.co.uk/v1/app/api';

  login(data)
  {
    return this.http.get(`${this.baseurl}/login/${data}`);
  }

  check(data)
  {
    return this.http.get(`${this.baseurl}/check/${data}`);
  }

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

}
