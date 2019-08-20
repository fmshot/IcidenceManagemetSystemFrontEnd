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

  constructor(private http:HttpClient, private fb: FormBuilder) {
    this.allocationViewFormGroup = this.fb.group(SidebarComponent.allocationViewForm());

  }

  ngOnInit() {
  }





  // public categoryModal() {
  //   $('#categoryModal').modal('show');
  // }
}
