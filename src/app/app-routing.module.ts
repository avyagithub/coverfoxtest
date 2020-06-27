import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'covid',
    loadChildren: () => import('./covidlayout/covidlayout.module').then(m => m.CovidlayoutModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
