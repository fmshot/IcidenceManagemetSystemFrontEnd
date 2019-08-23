import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";

import { AllassetsService } from "../../services/allassets.service";
import { AllgroupsService } from "../../services/allgroups.service";

@Component({
  selector: "app-assettable",
  templateUrl: "./assettable.component.html",
  styleUrls: ["./assettable.component.css"]
})
export class AssettableComponent implements OnInit {
  public allAssets: any = [];
  public allAssets2: any = [];
  public allGroups: any = [];
  public allGroupFormGroup: FormGroup;
  public createAssetFormGroup: FormGroup;
  public load = {
    requesting: false,
  }


  static allGroupForm = () => {
    return {
      code: new FormControl(""),
      detail: new FormControl("")

    };
  };

  static createAssetForm = () => {
    return {
      asset_code: new FormControl(""),
  asset_desc: new FormControl(""),
  refnum:new FormControl(""),
  asset_type: new FormControl(""),
  date_acquired: new FormControl(""),
  original_cost: new FormControl(""),
  total_maint_amt: new FormControl(""),
  last_service_date: new FormControl(""),
  next_service_date: new FormControl(""),
  last_bill_amount: new FormControl(""),
  equip_status: new FormControl(""),
  date_sold: new FormControl("")
    };
  };


  constructor(
    private allassetsService: AllassetsService,
    private allgroupsService: AllgroupsService,
    private http: HttpClient, private fb: FormBuilder  )
    {
      // this.allGroupFormGroup = this.fb.group(AssettableComponent.allGroupForm()),
      this.createAssetFormGroup = this.fb.group(AssettableComponent.createAssetForm());}

  ngOnInit() {
    this.getAssets();
    this.getAllCategories();
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

  public getAllCategories() {
    this.allgroupsService.getAllGroups().subscribe(
      (response: any) => {
        this.allGroups = response.data;
        console.log("response for all groups ", this.allGroups);
      },
      error => {
        console.log("Error ", error);
      }
    );
  }

  public saveNewAsset() {
    console.log("response for all assets ");

    this.load.requesting = true;
    const assetToSubmit = this.createAssetFormGroup.value;
    this.allassetsService.postNewasset(assetToSubmit).subscribe(
      (res) => {
        this.load.requesting = false;
        this.allAssets2.push(res);
        console.log("response for all assets ", this.allAssets2);
        this.createAssetFormGroup.reset();

      },
      (error) => {
        this.load.requesting = false;

      },
      () => {

      });
  }


  public seeCategoryAssets(){
    this.allgroupsService.getAllGroups().subscribe(
      (response:any)=>{

      },
      (error)=>{

      }
    )

  }
}
