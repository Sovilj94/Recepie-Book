import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recepie } from "../models/recepie.model";
import { RecepieService } from "../recepie/recepie.service";

@Injectable()
export class DataStorageService {

    /**
     *
     */
    constructor(private http: HttpClient, private recepieService: RecepieService) {
        
    }


    saveRecepies(){
        const recepies = this.recepieService.getRecepies();
        this.http.put('https://recepie-book-5e3cc-default-rtdb.europe-west1.firebasedatabase.app/recepies.json',recepies).subscribe(result => {
            console.log(result);
        });
    }

    getData(){
        this.http.get('https://recepie-book-5e3cc-default-rtdb.europe-west1.firebasedatabase.app/recepies.json').subscribe((result:Recepie[]) => {
            this.recepieService.setRecepies(result);
        });
    }


}