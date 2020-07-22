import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Family1Component } from './family1/family1.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'family1', component:Family1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
