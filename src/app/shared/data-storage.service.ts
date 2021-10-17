import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recepie } from "../models/recepie.model";
import { RecepieService } from "../recepie/recepie.service";
import { exhaustMap, map, repeat, take, tap } from "rxjs/operators"
import { AuthService } from "../auth/auth.service";
import { Ingredient } from "../models/ingredient.model";

@Injectable()
export class DataStorageService {

    /**
     *
     */
    constructor(private http: HttpClient, private recepieService: RecepieService, private authService: AuthService) {

    }


    saveRecepies(){
        const recepies = this.recepieService.getRecepies();
        this.http.put('https://recepie-book-5e3cc-default-rtdb.europe-west1.firebasedatabase.app/recepies.json',recepies).subscribe(result => {
            console.log(result);
        });
    }

    getRecepies(){

        return this.http.get<Recepie[]>('https://recepie-book-5e3cc-default-rtdb.europe-west1.firebasedatabase.app/recepies.json')
        .pipe(
        map(recepies => {
        return recepies.map(recepie => {
          return {
            ...recepie,
          ingredients: recepie.ingrediants ? recepie.ingrediants : []
          }
        })
      }),tap((recepies) => {
        this.recepieService.setRecepies(recepies);
      }));
    }


}
