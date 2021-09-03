import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('nameInput') name : ElementRef; 


  ngOnInit(): void {
  }

  onAdd(){
    this.shoppingService.onAdd(this.name.nativeElement.value,this.amount.nativeElement.value);
  }
  

}
