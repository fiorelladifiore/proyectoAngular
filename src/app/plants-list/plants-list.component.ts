import {Component, numberAttribute} from '@angular/core';
import {Plants} from './Plants';

@Component({
  selector: 'app-plants-list',
  standalone: false,

  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent {
  inputValue: string = '';
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
    stock: 0,
    clearance: false,
    quantity: 0,
  }
];

  upQuantity(plant:Plants): void{
    if(plant.stock>plant.quantity) {
      plant.quantity++;
    }
  }

  downQuantity(plant:Plants): void{
    if(plant.quantity>0) {
      plant.quantity--;
    }
  }


    checkQuantity(plant:Plants): void {
      if(plant.quantity > plant.stock) {
        alert("No hay suficientes plantas en stock");
      }
      if(plant.quantity < 0) {
        alert("No se pueden encargar plantas negativas:)");
      }
      plant.quantity = 0;
  }

}
