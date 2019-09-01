import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";

import { FaultsService } from "../../services/faults.service";

import { AllgroupsService } from "../../services/allgroups.service";
declare const $: any;

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css']
})
export class FaultComponent implements OnInit {
  error = '';

  public load = {
    requesting: false
  };
  allFaults: any = [];
  public allFaultFormGroup: FormGroup;
  public faultToEdit = null;

  static allFaultForm = () => {
    return {
      code: new FormControl(""),
      detail: new FormControl("")
    };
  };

  constructor(
    private faultService: FaultsService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.allFaultFormGroup = this.fb.group(FaultComponent.allFaultForm());

  }

  ngOnInit() {
    this.getFaultsCategory();

  }

//for complete table on init
public getFaultsCategory() {
  this.faultService.getAllFaults().subscribe(
    (response: any) => {
      this.allFaults = response.data;
      console.log("response for all groups ", this.allFaults);
    },
    error => {
      console.log("Error ", error);
    }
  );
}
//for complete table on init



public postFaultCategory() {
  this.load.requesting = true;
  const categoryToSubmit = this.allFaultFormGroup.value;
  this.faultService.postAllFaults(categoryToSubmit).subscribe(
    (res: any) => {
      this.load.requesting = false;
      this.allFaults.push(res);
      this.allFaultFormGroup.reset();
      // console.log("response for all groups ", this.allGroups);
    },
    error => {
      this.error = error;
      console.log("Error ", error);
      this.load.requesting = false;
    }
  );
}


}
