import { Injectable } from '@angular/core';
import { Food } from '../models/food.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickLunchService {

  
  
  
  burgers: Food[] = [
    { id: 1, title: 'Hamburger', description:'Steak, Tomate, Salade, Oignons', price: 14.50},
    { id: 2, title: 'Cheese', description: 'Steak, Cheddar, Tomate, Salade, Oignons', price: 15.50},
    { id: 3, title: 'Burger du moment', price: 17.50}
  ]
  
  pizzas: Food[] = [
    { id: 1, title: 'Reine', description: 'Tomate, Mozza, Olives', price: 9.50},
    { id: 2, title: 'Royale', description: 'Tomate, Mozza, Oeuf, Olives', price: 10.50},
    { id: 3, title: 'Verde', description: 'Tomate, Poireaux, Mozza, Soja', price: 58.90}
  ]
  
  crepes: Food[] = [
    { id: 1, title: 'Complete', description: 'Crepe, Beurre, Cidre', price: 5.50},
    { id: 2, title: 'Du jour', description: 'Crepe, Sucre, Nutella', price: 6.50}
  ]


  constructor() { }

  getBurgers(): Food[] {
    return this.burgers;
  }

  getPizzas(): Food[] {
    return this.pizzas;
  }

  getCrepes(): Food[] {
    return this.crepes;
  }


}
