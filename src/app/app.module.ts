import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Http,HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { DisplayCompComponent } from './display-comp/display-comp.component';
import { AuthServiceService } from './auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    DisplayCompComponent,
    FormsModule,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
