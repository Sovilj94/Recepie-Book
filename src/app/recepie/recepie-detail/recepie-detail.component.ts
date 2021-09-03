import { Component, Input, OnInit, ViewChild } from '@angular/core';
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


  @Input() recepie : Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {

  }

  toShoppingList(){
    this.recepieService.addIngrediants(this.recepie.ingrediants);
  }


}
