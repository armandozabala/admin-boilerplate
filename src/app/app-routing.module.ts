import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { LoginComponent } from './auth/login/login.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'graficas', component: GraficasComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },


  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},


  { path: '**', component: NotpagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
