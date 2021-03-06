import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients: Ingredient[];
  sub: Subscription;

  constructor(private shoppingService: ShoppingService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.sub = this.shoppingService.ingredientChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })



  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index);
  }

}
