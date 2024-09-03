import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurant-add',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './restaurant-add.component.html',
  styleUrl: './restaurant-add.component.css'
})
export class RestaurantAddComponent {

}
