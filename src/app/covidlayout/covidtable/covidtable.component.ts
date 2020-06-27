import { Component, OnInit, ViewChild } from '@angular/core';
import  { ApiServService } from '../../services/api-serv.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/*Interface */
interface countryTable {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}


@Component({
  selector: 'app-covidtable',
  templateUrl: './covidtable.component.html',
  styleUrls: ['./covidtable.component.scss'],
})
export class CovidtableComponent implements OnInit {

  constructor(private apiserv:ApiServService) { }


  /*Table to display column*/
  dataSourceCovid:countryTable[]=[]
  dataSource:any;
  displayedColumns: string[] = ['Country', 'CountryCode', 'NewConfirmed', 'TotalConfirmed','NewDeaths','TotalDeaths','Details'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  showTable:boolean=false;
  searchText:string;
  ngOnInit(): void {
    console.log("this is country Detail",this.dataSourceCovid)
  this.apiserv.callSummary().subscribe(data=>{

    this.dataSourceCovid=data['Countries']
    this.dataSource= new MatTableDataSource<countryTable>(this.dataSourceCovid);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.filteredData.length){
      this.showTable=true
    }else{
       this.showTable=false
    }

  })


  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
