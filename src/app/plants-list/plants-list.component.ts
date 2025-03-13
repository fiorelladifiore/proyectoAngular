import {Component, numberAttribute} from '@angular/core';
import {Plants} from './Plants';
import {PlantCartService} from '../plant-cart.service';


@Component({
  selector: 'app-plants-list',
  standalone: false,

  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent {
  plants: Plants[] = [
    {
    image: "/img/monstera.png",
    name: "Monstera deliciosa",
    type: "Araceae",
    price: 200,
    stock: 3,
    clearance: false,
    quantity: 0,
  },
  {
    image: "/img/potus.png",
    name: "Potus",
    type: "Araceae",
    price: 300,
    stock: 4,
    clearance: true,
    quantity: 0,
  },
  {
    image: "/img/sansevieria.png",
    name: "Sansevieria enana",
    type: "Asparagaceae",
    price: 1200,
    stock: 2,
    clearance: false,
    quantity: 0,
  },
  {
      image: "/img/palodeagua.png",
      name: "Palo de agua",
      type: "Asparagaceae",
      price: 3500,
      stock: 7,
      clearance: false,
      quantity: 0,
  },
  {
      image: "/img/singonio.png",
      name: "Singonio",
      type: "Araceae",
      price: 5900,
      stock: 3,
      clearance: false,
      quantity: 0,
  },

];
  constructor(private cart: PlantCartService){

  }

  addToCart(plant: Plants):void{
    this.cart.addToCart(plant);
    plant.stock -= plant.quantity;
    plant.quantity=0;

  }

  maxReached(m: string): void{
    alert(m);
  }

  minReached(m: string): void{
    alert(m);
  }




}
