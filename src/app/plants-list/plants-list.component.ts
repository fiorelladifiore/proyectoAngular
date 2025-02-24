import { Component } from '@angular/core';
import {Plants} from './Plants';

@Component({
  selector: 'app-plants-list',
  standalone: false,

  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent {
  plants: Plants[] = [
    {
    "image": "/img/monstera.png",
    "name": "Monstera deliciosa",
    "type": "Araceae",
    "price": 200,
    "stock": 3
  },
  {
    "image": "/img/potus.png",
    "name": "Potus",
    "type": "Araceae",
    "price": 300,
    "stock": 4
  },
  {
    "image": "/img/sansevieria.png",
    "name": "Sansevieria enana",
    "type": "Asparagaceae",
    "price": 120,
    "stock": 7
  }
  ]
}
