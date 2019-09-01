import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AssettableComponent } from "./components/assettable/assettable.component";
import { AllgroupComponent } from "./components/allgroup/allgroup.component";
import { AllocationComponent } from "./components/allocation/allocation.component";
import { IcmloginComponent } from "./components/icmlogin/icmlogin.component";
import { FaultComponent } from "./components/fault/fault.component";

import { LoginComponent } from './login';

// import { FaultComponent } from "./components/fault/FaultComponent.component";


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "allassets", component: AssettableComponent },
  { path: "allassetgroups", component: AllgroupComponent },
  { path: "allallocations", component: AllocationComponent },
  { path: "login", component: IcmloginComponent },
  { path: "log2", component: LoginComponent},
  { path: "users", component: LoginComponent},
  { path: "faults", component: FaultComponent},



  // { path: "faults", component: FaultComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
