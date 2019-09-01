import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";

import { AllocationService } from "../../services/allocation.service";

import { AllgroupsService } from "../../services/allgroups.service";
declare const $: any;
@Component({
  selector: "app-allgroup",
  templateUrl: "./allgroup.component.html",
  styleUrls: ["./allgroup.component.css"]
})
export class AllgroupComponent implements OnInit {
  public load = {
    requesting: false
  };
  allGroups: any = [];
  public allCategories: any = [];
  private allAllocations: any = [];
  public allGroupFormGroup: FormGroup;
  public productToEdit = null;

  static allGroupForm = () => {
    return {
      code: new FormControl(""),
      detail: new FormControl("")
    };
  };
  constructor(
    private allocationService: AllocationService,
    private fb: FormBuilder,
    private allgroupsService: AllgroupsService,
    private http: HttpClient
  ) {
    this.allGroupFormGroup = this.fb.group(AllgroupComponent.allGroupForm());
  }

  ngOnInit() {
    this.getAssets();
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  //for complete table on init
  public getAssets() {
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
  //for complete table on init

  public seeCategoryAssets() {
    this.allgroupsService
      .getAllGroups()
      .subscribe((response: any) => {}, error => {});
  }

  addId(data) {
    this.allGroupFormGroup.patchValue(data);
    this.productToEdit = data;

    console.log("ththt", data._id);
  }

  public postAssetCategory() {
    this.load.requesting = true;
    const categoryToSubmit = this.allGroupFormGroup.value;
    this.allgroupsService.postAllassetGroups(categoryToSubmit).subscribe(
      (res: any) => {
        this.load.requesting = false;
        this.allCategories.push(res);
        this.allGroupFormGroup.reset();
        // console.log("response for all groups ", this.allGroups);
      },
      error => {
        console.log("Error ", error);
        this.load.requesting = false;
      }
    );
  }

  // onSubmitproductsForm() {
  //   this.adminproductService.postAdminproduct(productObjectToSubmit).subscribe(
  //     (res) => {
  //       this.productsForm.reset();

  //     },
  //     (error) => {

  //     },
  //     () => {

  //     });
  // }

  public showAnAsset() {
    $("#mediumModal").modal("show");
  }
}
