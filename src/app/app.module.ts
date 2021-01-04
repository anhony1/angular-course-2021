import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './alerts/sucess/success.component';
import { DangerComponent } from './alerts/danger/danger.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    DangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
