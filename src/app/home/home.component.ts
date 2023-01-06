import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Foods[] = [];
  stars = [];    
  constructor(private foodService: FoodService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.foodService.getAll().filter(a => a.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      } else {
        this.foods = this.foodService.getAll();
      }
    });    
  }
  onMainClick(i: number, id: number) {
    let item = this.foods.find(a => a.id == id);
    let index = item !== undefined ? this.foods.indexOf(item) : -1;
    if (index != -1) {
      this.foods[index].star = i;      
    }    
  }  
}
