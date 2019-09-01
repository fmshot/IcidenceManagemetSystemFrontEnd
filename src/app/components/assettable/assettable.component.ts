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
  public productToEdit = null;
  public load = {
    requesting: false
  };

  static allGroupForm = () => {
    return {
      code: new FormControl(""),
      detail: new FormControl("")
    };
  };

  static createAssetForm = () => {
    return {
      asset_code: new FormControl(""),
      asset_group_id: new FormControl("", Validators.required),
      asset_desc: new FormControl(""),
      refnum: new FormControl(""),
      asset_type: new FormControl(""),
      date_acquired: new FormControl(""),
      original_cost: new FormControl(""),
      // total_maint_amt: new FormControl(""),
      // last_service_date: new FormControl(""),
      next_service_date: new FormControl(""),
      // last_bill_amount: new FormControl(""),
      equip_status: new FormControl(""),
      // date_sold: new FormControl("")
    };

  };

  constructor(
    private allassetsService: AllassetsService,
    private allgroupsService: AllgroupsService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    // this.allGroupFormGroup = this.fb.group(AssettableComponent.allGroupForm()),
    this.createAssetFormGroup = this.fb.group(
      AssettableComponent.createAssetForm()
    );
  }

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

  public async saveNewAsset()  {
    console.log("response for all assets");
    // if (this.createAssetFormGroup.invalid){
    //   console.log(this.createAssetFormGroup.controls)
    //   Object.keys(this.createAssetFormGroup.controls).forEach(control => {
    //     const formControl = this.createAssetFormGroup.get(control);
    //     if(formControl instanceof FormControl) {
    //       formControl.markAsTouched({onlySelf: true});
    //     }
    //   })
    // }
    this.load.requesting = true;
    const assetToSubmit = this.createAssetFormGroup.value;
    // assetToSubmit.asset_group = this.createAssetFormGroup.value.asset_group
    this.allassetsService.postNewasset(assetToSubmit).subscribe(
      res => {
        this.load.requesting = false;
        // this.assetToSubmit.asset_group = res.value.asset_group;

        this.allAssets2.push(res);
        console.log("response for all assets ", this.allAssets2);
        this.createAssetFormGroup.reset();
      },
      error => {
        this.load.requesting = false;
      },
      () => {}
    );
  }

  addId(data) {
    this.createAssetFormGroup.patchValue(data);
    this.productToEdit = data;

    console.log("ththt", data._id);
  }

  public seeCategoryAssets() {
    this.allgroupsService
      .getAllGroups()
      .subscribe((response: any) => {}, error => {});
  }
}
