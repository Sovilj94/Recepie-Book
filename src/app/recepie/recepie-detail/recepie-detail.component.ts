import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from 'src/app/models/recepie.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecepieComponent } from '../recepie.component';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {


  recepie : Recepie;
  id:number;
  constructor(private recepieService: RecepieService, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

   
    this.activatedRout.params.subscribe((parm:Params) => {
        this.id = +parm['id'];
        this.recepie = this.recepieService.getRecepie(this.id);
    })

  }

  toShoppingList(){
    this.recepieService.addIngrediants(this.recepie.ingrediants);
  }

  onEditRecepie(){
      this.router.navigate(['edit'],{relativeTo: this.activatedRout});
      console.log()
  }

  onDelete(){
        this.recepieService.deleteRecepie(this.id);
        this.router.navigate(['recepies'])
  }



}
