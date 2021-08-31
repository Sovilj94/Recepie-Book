import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('nameInput') name : ElementRef; 

  @Input() shoppingList : Ingredient[];

  ngOnInit(): void {
  }
  


  onAdd(){
    let ing = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
      this.shoppingList.push(ing);
  }

}
