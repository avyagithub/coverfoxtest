import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loadercmpo',
  templateUrl: './loadercmpo.component.html',
  styleUrls: ['./loadercmpo.component.scss']
})
export class LoadercmpoComponent implements OnInit {
  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loadershow.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
  }

}
