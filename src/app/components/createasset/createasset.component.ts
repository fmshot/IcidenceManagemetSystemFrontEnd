import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";
import { AllassetsService } from "../../services/allassets.service";
@Component({
  selector: 'app-createasset',
  templateUrl: './createasset.component.html',
  styleUrls: ['./createasset.component.css']
})
export class CreateassetComponent implements OnInit {
  allAssets: any = [];
  public makeIdFormGroup: FormGroup;

  static makeIdForm = () => {
    return {
      fullname: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      bloodgroup: new FormControl("", [Validators.required, Validators.maxLength(2)]),
      location: new FormControl("", [Validators.required])
    };
  };
  constructor(private fb: FormBuilder,
    private allassetsService: AllassetsService,
    private http: HttpClient
  ) {
    this.makeIdFormGroup = this.fb.group(CreateassetComponent.makeIdForm());
  }

  ngOnInit() {
    this.getAssets();

  }


  //for complete table on init
  public getAssets() {
    this.allassetsService.getAllasset().subscribe(
      (response: any) => {
        this.allAssets = response.data;
        console.log("create asset ", this.allAssets);
      },
      error => {
        console.log("Error ", error);
      }
    );
  }
  //for complete table on init

}
