import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidtableComponent } from './covidtable/covidtable.component';
import { CoviddetailComponent } from './coviddetail/coviddetail.component';


const routes: Routes = [
  {
    path:"covidtable",
    component:CovidtableComponent
  },
  {
    path:"coviddetail/:countryname",
    component:CoviddetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidlayoutRoutingModule { }
