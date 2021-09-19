import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { Ingredient } from "../models/ingredient.model";

@Injectable()
export class ShoppingService {

    ingredients :Ingredient[] = []
    startedEditing = new Subject<number>();
    ingredientChanged = new Subject<Ingredient[]>();

    onAdd(name:string, amount: number){
        let ing = new Ingredient(name,amount);
          this.ingredients.push(ing);
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients);
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients(){
        return this.ingredients;
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients);

    }

    deleteIngredient(index:number){
        this.ingredients.splice(index);
    }

}