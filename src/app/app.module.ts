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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecepieService } from './recepie/recepie.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { RouterModule, Routes } from '@angular/router';
import { RecepieEditComponent } from './recepie/recepie-edit/recepie-edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';

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
    DropdownDirective,
    RecepieEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecepieService,ShoppingService,DataStorageService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
