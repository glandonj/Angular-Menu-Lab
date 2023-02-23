import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';

  items:MenuItem[]=[
  {
    Item: "Traditional 2 topping Pizza",
    Category: "Pizza",
    Price: 12.99
  },
  {
    Item: "Hawaiian Pizza",
    Category: "Pizza",
    Price: 12.99
  },
  {
    Item: "Basil, Mozzarella, Tomato Pizza",
    Category: "Pizza",
    Price: 10.99
  },
  {
    Item: "Meat Lovers Pizza",
    Category: "Pizza",
    Price: 14.99
  },
  {
    Item: "Not that Hungry Pizza",
    Category: "Pizza",
    Price: 4.99
  },
  {
    Item: "Greek Salad",
    Category: "Side",
    Price: 4.99
  },
  {
    Item: "Garden Salad",
    Category: "Side",
    Price: 3.50
  },
  {
    Item: "Breadsticks",
    Category: "Side",
    Price: 2.99
  },
  {
    Item: "Chicken Tenders",
    Category: "Side",
    Price: 3.99
  },
  {
    Item: "Pop",
    Category: "Drink",
    Price: 0.99
  },
  {
    Item: "Fruit Juice",
    Category: "Drink",
    Price: 1.99
  },
  {
    Item: "Coffee",
    Category: "Drink",
    Price: 1.50
  },
  {
    Item: "Tea",
    Category: "Drink",
    Price: 1.50
  },
  {
    Item: "Water",
    Category: "Drink",
    Price: 0.00
  },
  {
    Item: "Grandma's Pie",
    Category: "Dessert",
    Price: 4.99
  },
  {
    Item: "Grandma's Choc Chip Cookie",
    Category: "Dessert",
    Price: 1.99
  },
  {
    Item: "Jello",
    Category: "Dessert",
    Price: 1.50
  },
  {
    Item: "Ice Cream",
    Category: "Dessert",
    Price: 2.99
  },
  ];

  }

  // class component{
  //   title="Chirpus Pizza"
  //   getByCategory(cat:string, values:MenuItem[]):MenuItem[]{

  //     let catItems:MenuItem[]=[];
  //     if(catItems.cat == values.Category){

  //     }
  //     return catItems;
  //   }
  // }


