import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatsureComponent } from './components/featsures/featsure/featsure.component';
import { HomeComponent } from './components/home/home/home.component';
import { PriceComponent } from './components/price/price/price.component';
import { RegisterComponent } from './components/Register/register/register.component';
import { UserComponent } from './components/users/user/user.component';

const routes: Routes = [


     {path:"featsure" , component:FeatsureComponent},
     {path:"users" , component:UserComponent},
     {path:"price" , component:PriceComponent},
     {path:"register", component:RegisterComponent},
     {path: "**" , component:HomeComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
