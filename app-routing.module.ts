import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
/*import { AboutUsComponent } from './about-us/about-us.component';*/
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PolicyListComponent } from './policy-list/policy-list.component';

import { RegisterComponent } from './register/register.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { UpdateUserListComponent } from './update-user-list/update-user-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'contact',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'policies', component:PolicyListComponent},
  {path: '', redirectTo: 'policies', pathMatch: 'full'},
  {path: 'create-policy' ,component: CreatePolicyComponent},
  {path: 'user' ,component: UserListComponent},
  {path: 'dashboard' ,component: DashboardComponent},
  {path: 'update-policy/:id' , component: UpdatePolicyComponent},
  {path: 'update-user/:id' , component: UpdateUserListComponent},
  {path: 'admin' ,component: AdminListComponent},
  {path: 'pay' ,component: PaymentListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
