import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { DataService } from "./data.service";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { AssettableComponent } from './components/assettable/assettable.component';
import { HttpClient } from 'selenium-webdriver/http';
import { AllgroupComponent } from './components/allgroup/allgroup.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { CreateassetComponent } from './components/createasset/createasset.component';
import { IcmloginComponent } from './components/icmlogin/icmlogin.component';
import { LoginComponent } from './login';
import { UsersComponent } from './components/users/users.component';
import { FaultComponent } from './components/fault/fault.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    TopnavbarComponent,
    AssettableComponent,
    AllgroupComponent,
    AllocationComponent,
    CreateassetComponent,
    IcmloginComponent,
    LoginComponent,
    UsersComponent,
    FaultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     // provider used to create fake backend
     fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
