import { Component, OnInit } from '@angular/core';
import { ErrorService} from '../services/error.service'
@Component({
  selector: 'app-errorcomp',
  templateUrl: './errorcomp.component.html',
  styleUrls: ['./errorcomp.component.scss']
})
export class ErrorcompComponent implements OnInit {
  errorbj:any;
  constructor(private error:ErrorService) {
    this.error.erroeshow.subscribe((v) => {
      console.log(v);
      this.errorbj = v;
    });
   }

  ngOnInit(): void {
  }

}
