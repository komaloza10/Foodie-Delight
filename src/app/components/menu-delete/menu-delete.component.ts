import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-delete',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './menu-delete.component.html',
  styleUrl: './menu-delete.component.css'
})
export class MenuDeleteComponent {

  constructor(public dialogRef: MatDialogRef<MenuDeleteComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
