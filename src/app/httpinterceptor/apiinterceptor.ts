import {  HttpResponse,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service'
import { ErrorService } from '../services/error.service'
@Injectable()
export class apiInterceptorService implements HttpInterceptor {

  private request:HttpRequest<any>[]=[]
  constructor(private loaderService: LoaderService,private errorserv:ErrorService) { }

  removerequest(req:HttpRequest<any>){
    const i=this.request.indexOf(req);
    if(i>=0){
      this.request.splice(i,1)
    }
    this.loaderService.loadershow.next(this.request.length>0)
  }

   intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method;

       this.request.push(req);
       console.log("No of requests--->" + this.request.length);
       this.loaderService.loadershow.next(true);
       this.errorserv.erroeshow.next(false)
       console.log('INTERCEPTOR');
       return Observable.create(observer => {
        const subscription = next.handle(req)
          .subscribe(
            event => {
              if (event instanceof HttpResponse) {
                this.removerequest(req);
                observer.next(event);
              }
            },
            err => {

              let errorObject={
                status:err.status,
                statusText:err.status==0 ? 'Something went wrong, please try after sometime or check internet connection' :err.statusText,
                url:err.url,
                timestamp:err.error.timeStamp

              }
              console.log('error' + errorObject);
              this.loaderService.loadershow.next(false);
              this.errorserv.erroeshow.next(true)
              this.removerequest(req);
              observer.error(err);
            },
            () => {
              this.removerequest(req);
              observer.complete();
            });
        // remove request from queue when cancelled
        return () => {
          this.removerequest(req);
          subscription.unsubscribe();
        };
      });
    }

}
