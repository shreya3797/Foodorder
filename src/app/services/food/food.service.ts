import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [ 
      {
        id: 1,
        name: 'Appam Thengapal',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Tamil Nadu', 'Kerala'],
        star: 4,
        tags: ['Appam', 'Breakfast'],
        imageUrl: '/assets/AppamThengapal.jpg'
      },
      {
        id: 2,
        name: 'Dosa Chutney',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Tamil Nadu', 'Kerala'],
        star: 3,
        tags: ['Dosa', 'Chutney', 'Breakfast'],
        imageUrl: '/assets/DosaChutney.jpg',
      },
      {
        id: 3,
        name: 'Idly Chutney',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Tamil Nadu', 'Karnataka'],
        star: 2,
        tags: ['Idly', 'Chutney', 'Breakfast'],
        imageUrl: '/assets/IdlyChutney.jpg',
      },           
      { 
        id: 4,
        name: 'Meals',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Tamil Nadu', 'Kerala', 'Karnataka'],
        star: 3,
        tags: ['Rice', 'Lunch'],
        imageUrl:'/assets/Meals.jpg' 
      },
      { 
        id: 5,
        name: 'Nei Pongal',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Tamil Nadu', 'Karnataka'],
        star: 4,
        tags: ['Pongal', 'Breakfast'],
        imageUrl: '/assets/NeiPongal.jpg'
      },
      {
        id: 6,
        name: 'Paal Payasam',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Tamil Nadu', 'Kerala'],
        star: 5,
        tags: ['Payasam', 'Kheer', 'Sweet'],
        imageUrl: '/assets/PaalPayasam.jpg'
      },
      {
        id: 7,
        name: 'Rava Upma',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Tamil Nadu'],
        star: 2,
        tags: ['Upma', 'Rava', 'Breakfast'],
        imageUrl:'/assets/RavaUpma.jpg'
      }
    ];
  }
}
