import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AssettableComponent } from "./components/assettable/assettable.component";
import { AllgroupComponent } from "./components/allgroup/allgroup.component";
import { AllocationComponent } from "./components/allocation/allocation.component";
// import { FaultComponent } from "./components/fault/FaultComponent.component";


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "allassets", component: AssettableComponent },
  { path: "allassetgroups", component: AllgroupComponent },
  { path: "allallocations", component: AllocationComponent },
  // { path: "faults", component: FaultComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
