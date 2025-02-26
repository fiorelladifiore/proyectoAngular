import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { FormsModule } from '@angular/forms';
import { ViveroHomeComponent } from './vivero-home/vivero-home.component';
import { ViveroPlantsComponent } from './vivero-plants/vivero-plants.component';
import { PlantsCartComponent } from './plants-cart/plants-cart.component';
import { ViveroAboutComponent } from './vivero-about/vivero-about.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    ViveroHomeComponent,
    ViveroPlantsComponent,
    PlantsCartComponent,
    ViveroAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
