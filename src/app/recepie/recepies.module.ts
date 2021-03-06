import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepieEditComponent } from "./recepie-edit/recepie-edit.component";
import { RecepieItemComponent } from "./recepie-list/recepie-item/recepie-item.component";
import { RecepieListComponent } from "./recepie-list/recepie-list.component";
import { RecepieStartComponent } from "./recepie-start/recepie-start.component";
import { RecepieComponent } from "./recepie.component";
import { RecepiesRoutingModule } from "./recepies-routing.module";

@NgModule({
  declarations: [
    RecepieComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    RecepieEditComponent,
    RecepieStartComponent
  ],
  imports:[
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecepiesRoutingModule,
    SharedModule
  ]
})
export class RecepiesModule{

}
