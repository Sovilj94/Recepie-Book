import { EventEmitter, Injectable, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Recepie } from "../models/recepie.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecepieService{

   public recepies: Recepie[] = [];
      
      @Output() changedRecepie = new Subject<Recepie[]>();
      /**
       *
       */

      constructor(private slService:ShoppingService, private activatedRout: ActivatedRoute) {
          
      }


      getRecepies(){
          return this.recepies;
      }

      addIngrediants(ingrediants: Ingredient[]){
          console.log(ingrediants);
        this.slService.addIngredients(ingrediants);
      }

      getRecepie(id:number){
         return this.recepies.find(x => x.id == id);
      }

      addRecepie(recepie:Recepie){
        this.recepies.push(recepie);
      }

      updateRecepie(recepie: Recepie, id : number){
        this.recepies[id - 1] = recepie;
      }

      deleteRecepie(id: number){

        this.recepies.splice(id - 1,1);
      }

      deleteIngredient(recepieId: number, ingredientId: number){
        this.recepies[recepieId - 1].ingrediants.splice(ingredientId,1);
      }


      setRecepies(recepies: Recepie[]){
         

        this.recepies = [

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
          
        ]


        this.changedRecepie.next(this.recepies);

      }
      

    
}