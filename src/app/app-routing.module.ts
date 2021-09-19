import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepieDetailComponent } from './recepie/recepie-detail/recepie-detail.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieStartComponent } from './recepie/recepie-start/recepie-start.component';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/recepies', pathMatch:'full'},
  { path:'recepies', component: RecepieComponent, children:[
    { path:'', component: RecepieStartComponent},
    { path: 'new', component: RecepieEditComponent},
    { path:':id', component: RecepieDetailComponent},
    { path: ':id/edit', component: RecepieEditComponent}
  ]},
  { path:'shoppingList', component: ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
