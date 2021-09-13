import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepie/recepie-detail/recepie-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecepieService } from './recepie/recepie.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecepieComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecepieService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
