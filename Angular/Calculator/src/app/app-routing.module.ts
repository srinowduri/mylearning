import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';


const routes: Routes = [
  { path:'add', component: AdditionComponent },
  { path:'sub', component: SubstractionComponent },
  { path:'mul', component: MultiplicationComponent},
  { path:'div', component:DivisionComponent},
  { path:'', redirectTo:'/add', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
