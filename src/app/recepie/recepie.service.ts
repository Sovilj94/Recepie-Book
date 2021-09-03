import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recepie } from "../models/recepie.model";

@Injectable()
export class RecepieService{
   private recepies: Recepie[] = [
        new Recepie('A test Recepie','dis is dis', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'),
        new Recepie('A test Recepie number 2','toe toe','https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg')
      ];



      @Output() selectedRecepie = new EventEmitter<Recepie>();

      getRecepies(){
          return this.recepies.slice();
      }

    
}