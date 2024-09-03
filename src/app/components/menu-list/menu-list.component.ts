import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuDeleteComponent } from '../menu-delete/menu-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

  constructor(public dialog: MatDialog) {}

  openDeleteConfirmation(): void {
    const dialogRef = this.dialog.open(MenuDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem();
      }
    });
  }

  deleteItem(): void {
    console.log('Item deleted');
  }
}
