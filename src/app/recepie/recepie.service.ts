import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Recepie } from "../models/recepie.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecepieService{

   private recepies: Recepie[] = [
        new Recepie(1,'A test Recepie',
        'dis is dis',
         'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg',
         [
            new Ingredient('Komad droge',10),
            new Ingredient('Dvije virsle',6),
            new Ingredient('Jabuka',2)
         ]),
        new Recepie(2,'A test Recepie number 2',
        'toe toe',
        'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg',
        [
            new Ingredient('Kurac od ovce',10),
            new Ingredient('Rakija',6),
            new Ingredient('Majmun',20)
        ])
      ];
      
      @Output() selectedRecepie = new EventEmitter<Recepie>();
      /**
       *
       */
      constructor(private slService:ShoppingService) {
          
      }


      getRecepies(){
          return this.recepies.slice();
      }

      addIngrediants(ingrediants: Ingredient[]){
          console.log(ingrediants);
        this.slService.addIngredients(ingrediants);
      }

    
}