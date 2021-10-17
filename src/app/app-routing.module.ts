import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { RecepieDetailComponent } from './recepie/recepie-detail/recepie-detail.component';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieStartComponent } from './recepie/recepie-start/recepie-start.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepiesResolverService } from './recepie/recepies-resolver.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/recepies', pathMatch:'full'},
  { path:'auth', component: AuthComponent},
  { path:'recepies',canActivate: [AuthGuard], component: RecepieComponent,resolve:[RecepiesResolverService] ,children:[
    { path:'', component: RecepieStartComponent, resolve:[RecepiesResolverService]},
    { path: 'new', component: RecepieEditComponent},
    { path:':id', component: RecepieDetailComponent, resolve: [RecepiesResolverService]},
    { path: ':id/edit', component: RecepieEditComponent, resolve: [RecepiesResolverService]}
  ]},
  { path:'shoppingList', component: ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
