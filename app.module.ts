import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PolicyListComponent } from './policy-list/policy-list.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserListComponent } from './update-user-list/update-user-list.component';



@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    /*AboutUsComponent,*/
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    
    PolicyListComponent,
    CreatePolicyComponent,
    UpdatePolicyComponent,
    DashboardComponent,
    UserListComponent,
    UpdateUserListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
