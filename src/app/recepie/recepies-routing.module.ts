import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepie-edit/recepie-edit.component";
import { RecepieStartComponent } from "./recepie-start/recepie-start.component";
import { RecepieComponent } from "./recepie.component";
import { RecepiesResolverService } from "./recepies-resolver.service";

const routes: Routes = [
  { path:'',canActivate: [AuthGuard], component: RecepieComponent,resolve:[RecepiesResolverService] ,children:[
    { path:'', component: RecepieStartComponent, resolve:[RecepiesResolverService]},
    { path: 'new', component: RecepieEditComponent},
    { path:':id', component: RecepieDetailComponent, resolve: [RecepiesResolverService]},
    { path: ':id/edit', component: RecepieEditComponent, resolve: [RecepiesResolverService]}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepiesRoutingModule {

}
