import { Component, OnInit } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public allgroup:boolean=true;
public assettable:boolean=false;
public allocation:boolean=false;
// public assettable:boolean=true;



  constructor() { }

  ngOnInit() {
  }



public showAssetTable(){
  this.assettable=true;
  this.allgroup=false;
  this.allocation=false;

}

public showAllocationTable(){
  this.assettable=false;
  this.allgroup=false;
  this.allocation=true;

}


}
