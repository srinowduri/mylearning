import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('amountInput') amountInput: ElementRef;
@ViewChild('nameInput') nameInput: ElementRef;

  constructor(private shoppingListservice: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    //console.log(nameInput.value);
    //console.log(amountInput.value);
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListservice.addIngredient(newIngredient);
  }
}
