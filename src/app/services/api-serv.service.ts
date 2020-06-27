import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

interface RootObjectCountry {
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


@Injectable({
  providedIn: 'root'
})
export class ApiServService {
  sum=environment.summryUrl;
  countryapi=environment.countryapi;
  constructor(public http:HttpClient) { }
  callSummary(){
    return this.http.get(this.sum)
  }
  countryDetails(countrname):Observable<RootObjectCountry[]>{
    return this.http.get<RootObjectCountry[]>(`${this.countryapi}/${countrname}`)
  }
}
