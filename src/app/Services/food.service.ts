import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[]{
    return tag == "All"?
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name:"All", count: 8},
      {name:"FastFood", count: 3},
      {name:"Pizza", count: 3},
      // {name:"Lunch", count: 3},
      {name:"SlowFood", count: 5},
      {name:"Hamburger", count: 1},
      {name:"Fry", count: 3},
      {name:"Soup", count: 2},
    ]
  }

  getAll(): Foods[]{
    return [
      {
        id:1,
        name: "Veg Biriyani",
        cookTime: "20-30",
        price: 15,
        favorite:true,
        origins: ['india','itally','china'],
        star: 4.5,
        imageUrl:'/assets/food1.jpg',
        tags : ['FastFood', 'Soup','Fry']
      },
      {
        id:2,
        name: "Pizza Pepparoni",
        cookTime: "10-20",
        price: 10,
        favorite:false,
        origins: ['America','itally'],
        star: 3.5,
        imageUrl:'/assets/food2.jpg',
        tags : ['SlowFood','Pizza']
      },
      {
        id:3,
        name: "Pizza Roll",
        cookTime: "10-20",
        price: 10,
        favorite:true,
        origins: ['itally'],
        star: 4,
        imageUrl:'/assets/food3.jpg',
        tags : ['SlowFood','Pizza']
      },
      {
        id:4,
        name: "Veg Items",
        cookTime: "10-20",
        price: 10,
        favorite:false,
        origins: ['itally'],
        star: 3,
        imageUrl:'/assets/food4.jpg',
        tags : ['FastFood', 'Soup']
      },
      {
        id:5,
        name: "Pizza Egg Pepparoni",
        cookTime: "10-20",
        price: 10,
        favorite:false,
        origins: ['itally'],
        star: 3.5,
        imageUrl:'/assets/food5.jpg',
        tags : ['SlowFood','Pizza','Fry']
      },
      {
        id:6,
        name: "Sev Puri",
        cookTime: "10-20",
        price: 10,
        favorite:false,
        origins: ['itally'],
        star: 4.1,
        imageUrl:'/assets/food6.jpg',
        tags : ['FastFood']
      },
      {
        id:7,
        name: "Chicken",
        cookTime: "10-20",
        price: 10,
        favorite:true,
        origins: ['itally'],
        star: 4,
        imageUrl:'/assets/food7.jpg',
        tags : ['SlowFood']
      },
      {
        id:8,
        name: "Chicken Biryani",
        cookTime: "10-20",
        price: 10,
        favorite:false,
        origins: ['itally'],
        star: 3,
        imageUrl:'/assets/food8.jpg',
        tags : ['SlowFood','Hamburger','Fry']
      },

    ]

  }
  // getAll(): string[]{
  //   return [
  //     "/assets/food1.jpg",
  //     "/assets/food2.jpg",
  //     "/assets/food3.jpg",
  //     "/assets/food4.jpg",
  //     "/assets/food5.jpg",
  //     "/assets/food6.jpg",
  //     "/assets/food7.jpg",
  //     "/assets/food8.jpg",
  //   ]
  // }
}
