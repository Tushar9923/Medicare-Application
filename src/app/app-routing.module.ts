import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { DischargeComponent } from './discharge/discharge.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicareComponent } from './medicare/medicare.component';
import { MediclameComponent } from './mediclame/mediclame.component';
import { OpdsComponent } from './opds/opds.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'discharge', component: DischargeComponent
  },
  {
    path: 'deparment', component: DeparmentComponent
  },
  {
    path: 'Medicare', component: MedicareComponent
  },
  {
    path: 'PaymentGateway', component: PaymentGatewayComponent
  },
  {
    path: 'opds', component: OpdsComponent
  },
  {
    path: 'mediclame', component: MediclameComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
