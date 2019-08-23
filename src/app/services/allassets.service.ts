import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import {Allasset} from "../models/allasset";
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllassetsService {
  selectedAllasset: Allasset;
  allassets: Allasset[];
  readonly baseURL = 'http://localhost/icm/public/api/assetsdetail';

  constructor(private http: HttpClient) { }



  getAllasset() {
    return this.http.get(this.baseURL);
  }

  postNewasset(asset: Allasset) {
    return this.http.post(this.baseURL, asset);
  }
}
