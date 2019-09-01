import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Allocations } from '../models/Allocation';
@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  selectedAllocation: Allocations;
  allocations: Allocations[];
  readonly baseURL = 'http://localhost/icm/public/api/assetsallocation';

  constructor(private http: HttpClient) { }



  getAllAllocations() {
    return this.http.get(this.baseURL);
  }

  postAllAllocations(allo:Allocations) {
    // console.log('ee', allo);
    return this.http.post(this.baseURL, allo );
    // console.log('eeww');
  }
}
