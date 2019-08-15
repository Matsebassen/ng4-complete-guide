import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    shoppingListChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    editIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.shoppingListChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.shoppingListChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.shoppingListChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.shoppingListChanged.emit(this.ingredients.slice());
    }

}