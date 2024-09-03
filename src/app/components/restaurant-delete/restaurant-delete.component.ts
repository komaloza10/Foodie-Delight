import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-delete',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-delete.component.html',
  styleUrl: './restaurant-delete.component.css'
})
export class RestaurantDeleteComponent {
  constructor(public dialogRef: MatDialogRef<RestaurantDeleteComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
