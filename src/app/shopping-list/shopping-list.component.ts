import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients :Ingredient[] = [
    new Ingredient('Kaladont',2),
    new Ingredient('Tolet papir',3)
  ]

  ngOnInit(): void {
  }

}
