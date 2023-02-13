import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { FoodService } from '../Services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!:Foods ;

  constructor(private activatedRoute: ActivatedRoute, private foodService:FoodService, private cartService : CartService, private router: Router){
    activatedRoute.params.subscribe((params)=> {
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
