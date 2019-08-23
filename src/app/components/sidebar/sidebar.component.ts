import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,   NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private allAllocations:any=[];
  public allocationViewFormGroup: FormGroup;
  static allocationViewForm = () => {
    return {
      code: new FormControl(""),
      detail: new FormControl(""),

    };
  };
  public allgroup:boolean=true;
  public assettable:boolean=false;
  public allocation:boolean=false;

  constructor(private http:HttpClient, private fb: FormBuilder) {
    this.allocationViewFormGroup = this.fb.group(SidebarComponent.allocationViewForm());

  }

  ngOnInit() {

  }



  // public showAssetTable(){
  //   this.assettable=true;
  //   this.allgroup=false;
  //   this.allocation=false;

  // }

  // public showAllocationTable(){
  //   this.assettable=false;
  //   this.allgroup=false;
  //   this.allocation=true;

  // }


  // public categoryModal() {
  //   $('#categoryModal').modal('show');
  // }
}
