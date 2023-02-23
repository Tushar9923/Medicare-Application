import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DischargeComponent } from './discharge/discharge.component';
import { MedicareComponent } from './medicare/medicare.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { OpdsComponent } from './opds/opds.component';
import { MediclameComponent } from './mediclame/mediclame.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeparmentComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    DischargeComponent,
    MedicareComponent,
    PaymentGatewayComponent,
    OpdsComponent,
    MediclameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
