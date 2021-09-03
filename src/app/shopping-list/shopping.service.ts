import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable()
export class ShoppingService {

    ingredients :Ingredient[] = []

    onAdd(name:string, amount: number){
        let ing = new Ingredient(name,amount);
          this.ingredients.push(ing);
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
    }

}