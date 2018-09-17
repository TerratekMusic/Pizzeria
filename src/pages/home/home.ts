

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DishProvider} from '../../providers/dish/dish';
import { Dish } from '../../providers/dish/dish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	dish.Dish;
	leader:Leader;
	promotion:Promotion;

  constructor(public navCtrl: NavController 
    private dishService:DishProvider,
  	private leaderService: LeaderProvider,
  	private promotionService: PromotionProvider,
  	@Inject('DbURL') private DbURL
  	){

  	getFeaturedDish(){
  		this.dishService
  		.getFeaturedDish()
  		.subscribe(
  			response=>{
  				this.dish=response[0];
  				console.log(error);
  			});
  	}


}

  }




