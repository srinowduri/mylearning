import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Aloo Poori', 
    'South Indian Tiffine',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/03/poori-masala-recipe.jpg', 
    [ new Ingredient('Poori', 3),
      new Ingredient('Curry', '1 cup')
    ]),
    new Recipe('Indian Thali', 
    'South Indian Meals',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/South_Indian_non-veg_Meals.jpg', 
    [
      new Ingredient('Papads', 2),
      new Ingredient('Roti', 2)
    ])
  ];

  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
