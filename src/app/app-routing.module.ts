import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViveroPlantsComponent} from './vivero-plants/vivero-plants.component';
import {ViveroHomeComponent} from './vivero-home/vivero-home.component';
import {ViveroAboutComponent} from './vivero-about/vivero-about.component';

const routes: Routes = [
  {
    path: '',
    component: ViveroHomeComponent
  },
  {
    path: 'plants',
    component: ViveroPlantsComponent
  },
  {
    path: 'about',
    component: ViveroAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
