import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { RestaurantListComponent } from '../app/components/restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from '../app/components/restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from '../app/components/restaurant-delete/restaurant-delete.component';
import { RestaurantAddComponent } from '../app/components/restaurant-add/restaurant-add.component'
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuDeleteComponent } from './components/menu-delete/menu-delete.component';
import { MenuAddComponent } from './components/menu-add/menu-add.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'login', component : LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'restaurant', component: RestaurantListComponent, canActivate: [AuthGuard]},
    { path: 'restaurant-add', component: RestaurantAddComponent},
    { path: 'restaurant-edit', component: RestaurantEditComponent},
    { path: 'restaurant-delete', component: RestaurantDeleteComponent},
    { path: 'menu-list', component:MenuListComponent},
    { path: 'menu-delete', component: MenuDeleteComponent},
    { path: 'menu-add', component:MenuAddComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

