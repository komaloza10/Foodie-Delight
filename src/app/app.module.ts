import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MenuDeleteComponent } from './components/menu-delete/menu-delete.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { provideHttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuDeleteComponent,
    LoginComponent,
    RestaurantListComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  providers: [provideHttpClient()]
})
export class AppModule { }
