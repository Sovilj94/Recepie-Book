import { Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  sub: Subscription;
  editMode = false;
  editedItemIndex :number;
  selectedIngredient: Ingredient;


  constructor(private shoppingService: ShoppingService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @ViewChild('f') ingrediantsForm: NgForm;


  ngOnInit(): void {
    this.sub = this.shoppingService.startedEditing.subscribe(index => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.selectedIngredient = this.shoppingService.getIngredient(this.editedItemIndex);
      this.ingrediantsForm.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount
      })
    })
  }

  onSubmit(){
    console.log(this.editMode);
    const newIngredient = new Ingredient(this.ingrediantsForm.value.name ,this.ingrediantsForm.value.amount);
    if(!this.editMode){
      this.shoppingService.onAdd(this.ingrediantsForm.value.name ,this.ingrediantsForm.value.amount);
    }else{
      console.log(this.selectedIngredient);
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    this.editMode = false;
    this.ingrediantsForm.reset();
  }

  onClear(){
    this.ingrediantsForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.onClear();
  }
  

}
