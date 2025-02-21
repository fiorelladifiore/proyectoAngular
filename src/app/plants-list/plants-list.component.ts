import { Component } from '@angular/core';

@Component({
  selector: 'app-plants-list',
  standalone: false,

  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent {
  plant = {
    "image": "/img/monstera.png",
    "name": "Monstera deliciosa",
    "type": "Araceae",
    "price": 200,
    "stock": 3
  }
  plant2 = {
    "image": "/img/potus.png",
    "name": "Potus",
    "type": "Araceae",
    "price": 300,
    "stock": 4
  }
  plant3 = {
    "image": "/img/sansevieria.png",
    "name": "Sansevieria enana",
    "type": "Asparagaceae",
    "price": 120,
    "stock": 7
  }
}
