import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiServService } from '../../services/api-serv.service';
import { filter, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

interface rootObjectCountry {
  Active: number;
  City: string;
  CityCode: string;
  Confirmed: number;
  Country: string;
  CountryCode: string;
  Date: string;
  Deaths: number;
  Lat: string;
  Lon: string;
  Province: string;
  Recovered: number;
}
@Component({
  selector: 'app-coviddetail',
  templateUrl: './coviddetail.component.html',
  styleUrls: ['./coviddetail.component.scss']
})
export class CoviddetailComponent implements OnInit {

  constructor(private actroute:ActivatedRoute,private apiserv:ApiServService) { }
  countryname:string;
  countrydetail:rootObjectCountry[]=[];
  countryDataStore:rootObjectCountry[]=[];
  pipe = new DatePipe('en-US');
  ngOnInit(): void {
    console.log("this is country Detail",this.countrydetail)
    this.actroute.params.subscribe(data=>{
        this.countryname=data.countryname
    })

    this.apiserv.countryDetails(this.countryname)
    .subscribe(data=>{
      data.map(x=>{
        x.Date=this.pipe.transform(x.Date,'mediumDate')
      })
      this.countrydetail=data;
      this.countryDataStore=data
    })
  }
  month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  showAlert:boolean=false;

  onchange(e){
    console.log("Value selection Chnage",e.value)
    if(e.value=="all"){
       this.countrydetail=this.countryDataStore;
      if(this.countrydetail.length==0){
        this.showAlert=true
      }else{
        this.showAlert=false
      }

    }else {
      this.countrydetail=this.countryDataStore
       let arr= this.countrydetail.filter(obj=>{
            return  obj.Date.includes(e.value)
        })
        this.countrydetail=arr
        if(this.countrydetail.length==0){
          this.showAlert=true
        }else{
          this.showAlert=false
        }


    }
  }


}
