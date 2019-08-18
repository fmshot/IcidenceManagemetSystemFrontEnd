import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AssettableComponent } from "./components/assettable/assettable.component";
import { AllgroupComponent } from "./components/allgroup/allgroup.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "allassets", component: AssettableComponent },
  { path: "allassets", component: AssettableComponent },
  { path: "allassetgroups", component: AllgroupComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
