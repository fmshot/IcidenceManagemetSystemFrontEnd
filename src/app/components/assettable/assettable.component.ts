import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AllassetsService } from "../../services/allassets.service";
@Component({
  selector: "app-assettable",
  templateUrl: "./assettable.component.html",
  styleUrls: ["./assettable.component.css"]
})
export class AssettableComponent implements OnInit {
  allAssets: any = [];

  constructor(
    private allassetsService: AllassetsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAssets();
  }

  //for complete table on init
  public getAssets() {
    this.allassetsService.getAllasset().subscribe(
      (response: any) => {
        this.allAssets = response.data;
        console.log("respone gfhgfhfghhg ", this.allAssets);
      },
      error => {
        console.log("Error ", error);
      }
    );
  }
  //for complete table on init
}
