import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { FeatsureComponent } from './components/featsures/featsure/featsure.component';
import { StartComponent } from './components/start/start/start.component';
import { PriceComponent } from './components/price/price/price.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/users/user/user.component';
import { RegisterComponent } from './components/Register/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatsureComponent,
    StartComponent,
    PriceComponent,
    UserComponent,
    RegisterComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
