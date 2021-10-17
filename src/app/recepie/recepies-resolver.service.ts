import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recepie } from "../models/recepie.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecepieService } from "./recepie.service";



@Injectable({providedIn:'root'})
export class RecepiesResolverService implements Resolve<Recepie[]> {


  constructor(private dataStorage: DataStorageService, private recepieService: RecepieService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recepie[] | Observable<Recepie[]> | Promise<Recepie[]> {

    const recepies = this.recepieService.getRecepies();

    if(recepies.length === 0){
      return this.dataStorage.getRecepies();
    } else {
      return recepies;
    }

  }





}
