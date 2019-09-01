import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Fault } from "../models/Fault";

@Injectable({
  providedIn: 'root'
})
export class FaultsService {
  selectedFault: Fault;
  faults: Fault[];
  readonly baseURL = "http://localhost/icm/public/api/fault";
  constructor(private http: HttpClient) { }



  getAllFaults() {
    return this.http.get(this.baseURL);
  }
  // getOneasset() {
  //   return this.http.get(this.baseURL);
  // }

  postAllFaults(data: Fault) {
    return this.http.post(this.baseURL, data);
  }

}
