import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainframeComponent } from './mainframe/mainframe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule} from './material-ui/material-ui.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ApiServService } from './services/api-serv.service'
import { apiInterceptorService } from './httpinterceptor/apiinterceptor';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoadercmpoComponent } from './loadercmpo/loadercmpo.component'
import { LoaderService } from './services/loader.service';
import { AboutComponent } from './about/about.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component'
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainframeComponent,
    LoadercmpoComponent,
    AboutComponent,
    ErrorcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule,
    HttpClientModule,

  ],
  providers: [ApiServService,LoaderService,{provide: HTTP_INTERCEPTORS, useClass: apiInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
