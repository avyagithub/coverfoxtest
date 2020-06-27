import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public erroeshow=new BehaviorSubject(false)

  constructor() { }

}
