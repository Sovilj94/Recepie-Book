import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path:'', redirectTo:'/recepies', pathMatch:'full'},
  { path:'auth', component: AuthComponent},
  { path: 'recepies', loadChildren: () => { return import('./recepie/recepies.module').then(m => m.RecepiesModule); }},
  { path: 'shoppingList', loadChildren: () => { return import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule); }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
