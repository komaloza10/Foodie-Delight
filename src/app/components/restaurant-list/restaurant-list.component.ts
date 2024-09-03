import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RestaurantDeleteComponent } from '../restaurant-delete/restaurant-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Restaurant } from '../../restaurant.model';
import { RestaurantService } from '../../Services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterModule,RouterOutlet,CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];
  errorMessage: string = '';
  loading: boolean = true;

  constructor(public dialog: MatDialog,private router: Router, private restaurantService: RestaurantService) {}

  // ngOnInit(): void {
  //   this.restaurantService.getRestaurants().subscribe({
  //     next: (data: Restaurant[]) => {
  //       this.restaurants = data;
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       this.errorMessage = 'Error fetching restaurants';
  //       this.loading = false;
  //     }
  //   });
  // }

  async ngOnInit(): Promise<void> {
    try {
      this.restaurants = await this.restaurantService.getRestaurants();
    } catch (error) {
      console.error('Error loading restaurants:', error);
    }
  }

  viewMenu(restaurantId: number): void {
    this.router.navigate([`/restaurants/${restaurantId}/menu`]);
  }

  editRestaurant(restaurantId: number): void {
    this.router.navigate([`/restaurants/${restaurantId}/edit`]);
  }

  openDeleteConfirmation(): void {
    const dialogRef = this.dialog.open(RestaurantDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem();
      }
    });
  }

  deleteItem(): void {
    console.log('Restaurant deleted');
  }
}
