import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ceviche',
      'Bien peruanaso',
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ceviche_de_pescado_%28La_Punta%2C_Callao%29.jpg',
      [
        new Ingredient('Pescado', 1),
        new Ingredient('Limon', 1),
        new Ingredient('Cebolla', 1)
      ]),
    new Recipe(
      'Lomo saltado',
      'Tan jugoso que babearás',
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg',
      [
        new Ingredient('Carne de lomo', 1),
        new Ingredient('Ají escabeche', 1),
        new Ingredient('Cebolla', 1),
        new Ingredient('Tomate', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
