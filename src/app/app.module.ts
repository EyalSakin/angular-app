import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import { NumbersGridComponent } from './numbers-grid/numbers-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NumbersGridComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
