import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Allgroup } from "../models/allgroup";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AllgroupsService {
  selectedAllasset: Allgroup;
  allassets: Allgroup[];
  readonly baseURL = "http://localhost/icm/public/api/assetsgroup";

  constructor(private http: HttpClient) {}

  getAllGroups() {
    return this.http.get(this.baseURL);
  }
  // getOneasset() {
  //   return this.http.get(this.baseURL);
  // }

  postAllassetGroups(data: Allgroup) {
    return this.http.post(this.baseURL, data);
  }
}
