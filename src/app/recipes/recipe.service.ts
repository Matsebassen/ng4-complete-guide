import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
            'A super-tasy Schnitzel - just awesome!', 
            'https://www.thespruceeats.com/thmb/_lj5FMmlXhjUGcvPu0dgc6_WTow=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
            new Recipe('Big Fat Burger', 
            'What else do you need to say?', 
            'https://amp.businessinsider.com/images/5c0990b1d5000c07f77ba114-750-563.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {        
        return this.recipes[index];
    }

    getRecipeId(recipe: Recipe){
        return this.recipes.indexOf(recipe);
    }

    addRecipe(recipe: Recipe): number{
        const id = this.recipes.push(recipe) - 1;
        this.recipesChanged.next(this.recipes.slice());
        return id;
    }

    updateRecipe(index: number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}