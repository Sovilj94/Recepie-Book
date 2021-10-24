import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports:[
    FormsModule,
    ShoppingListRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports:[]
})
export class ShoppingListModule {

}
