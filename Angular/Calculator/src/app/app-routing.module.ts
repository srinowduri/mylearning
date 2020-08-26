import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';
import { StringsComponent } from './strings/strings.component';
import { ArraysComponent } from './arrays/arrays.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { ObjectsComponent } from './objects/objects.component';


const routes: Routes = [
  { path:'optn', component: OperationsComponent },
  { path:'str', component: StringsComponent },
  { path:'arr', component: ArraysComponent },
  { path:'obj', component: ObjectsComponent },

  // { path:'rxjs', component: RxjsComponent },
  { path:'', redirectTo:'/optn', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
