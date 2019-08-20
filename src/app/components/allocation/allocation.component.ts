import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";

import { AllocationService } from "../../services/allocation.service";
declare const $: any;

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  private allAllocations:any=[];
  public allocationViewFormGroup: FormGroup;
  static allocationViewForm = () => {
    return {
      trans_no: new FormControl(""),
      asset_id: new FormControl(""),
      user_id: new FormControl(""),
      asset_code: new FormControl(""),
      date_assigned: new FormControl(""),
      asset_status: new FormControl(""),
      date_transfer: new FormControl("")
    };
  };

  constructor(private allocationService:AllocationService, private http:HttpClient, private fb: FormBuilder) {
    this.allocationViewFormGroup = this.fb.group(AllocationComponent.allocationViewForm());

  }

  ngOnInit() {
    this.getAllallocations();
  }


   //for complete allocations table on init
   public getAllallocations() {
    this.allocationService.getAllAllocations().subscribe(
      (response: any) => {
        this.allAllocations = response.data;
        console.log("response for allocations ", this.allAllocations);
      },
      error => {
        console.log("Error ", error);
      }
    );
  }
  //for complete table on init


  public fullSingleAllocation() {
    $('#exampleModalCenter').modal('show');
  }
}
