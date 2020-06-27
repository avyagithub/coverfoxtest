import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidlayoutRoutingModule } from './covidlayout-routing.module';
import { CovidtableComponent } from './covidtable/covidtable.component';
import { MaterialUiModule} from '../material-ui/material-ui.module';
import { CoviddetailComponent } from './coviddetail/coviddetail.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CovidtableComponent, CoviddetailComponent],
  imports: [
    CommonModule,
    CovidlayoutRoutingModule,
    MaterialUiModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [],
  exports:[CovidtableComponent,MaterialUiModule,CoviddetailComponent]

})
export class CovidlayoutModule { }
