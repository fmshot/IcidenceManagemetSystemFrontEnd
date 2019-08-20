import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

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
    CreateassetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
