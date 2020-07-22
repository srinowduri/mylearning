import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Practice1Component } from './practice1/practice1.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'practice', component: Practice1Component},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
