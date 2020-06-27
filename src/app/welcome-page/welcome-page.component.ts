import { Component, OnInit } from '@angular/core';
import { Router,Route} from '@angular/router'
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public routeNav:Router) { }

  ngOnInit(): void {
  }
  onInputChange(event: any) {
    if(event.value==100){
      console.log("Value of slider--",event.value)
      this.routeNav.navigate(['covid/covidtable'])
    }
   }
}
