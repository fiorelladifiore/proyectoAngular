import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  showCartButton: boolean = false;
  title = 'VIVERO';
  email= 'vivero@gmail.com';
  tel= '+54 1156256987';


  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRoute();
  }

  ngAfterViewChecked() {
    // Revisa la ruta actual cuando la vista se actualiza
    this.checkRoute();
  }

  // Método para verificar la ruta y mostrar el botón del carrito
  checkRoute() {
    // Obtiene la ruta actual y muestra el botón solo si es "plants"
    const currentRoute = this.router.url;
    this.showCartButton = currentRoute === '/plants';
  }
}