import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Allocations } from '../models/Allocation';
@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  selectedAllocation: Allocations;
  allocations: Allocations[];
  readonly baseURL = 'http://localhost:8000/api/assetsallocation';

  constructor(private http: HttpClient) { }



  getAllAllocations() {
    return this.http.get(this.baseURL);
  }
}
