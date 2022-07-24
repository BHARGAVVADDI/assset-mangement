import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ {path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent },
{path:'home',component:HomePageComponent},{path:'register',component:RegisterComponent},{path:'allRequests',component:AllRequestsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
