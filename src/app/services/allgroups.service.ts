import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import {Allgroup} from './models/allgroup';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllgroupsService {
  selectedAllasset: Allgroup;
  allassets: Allgroup[];
  readonly baseURL = 'http://localhost:8000/api/assetsgroup';

  constructor(private http: HttpClient) { }



  getAllasset() {
    return this.http.get(this.baseURL);
  }
  // getOneasset() {
  //   return this.http.get(this.baseURL);
  // }
}
