import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AllgroupsService } from "../../services/allgroups.service";
declare const $: any;
@Component({
  selector: 'app-allgroup',
  templateUrl: './allgroup.component.html',
  styleUrls: ['./allgroup.component.css']
})
export class AllgroupComponent implements OnInit {
  allGroups: any = [];

  constructor(
    private allgroupsService: AllgroupsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAssets();
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  //for complete table on init
  public getAssets() {
    this.allgroupsService.getAllasset().subscribe(
      (response: any) => {
        this.allGroups = response.data;
        console.log("respone gfhgfhfghhg ", this.allGroups);
      },
      error => {
        console.log("Error ", error);
      }
    );
  }
  //for complete table on init

  public seeCategoryAssets(){
    this.allgroupsService.getAllasset().subscribe(
      (response:any)=>{

      },
      (error)=>{

      }
    )

  }


  public showAnAsset() {
    $('#mediumModal').modal('show');
  }

}
