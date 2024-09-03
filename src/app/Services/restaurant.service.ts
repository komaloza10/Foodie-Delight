import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiurl = 'https://api.example.com/restaurants';
  private storageKey = 'restaurants';

  constructor() { }

  // getRestaurants(): Observable<Restaurant[]>{
  //   return this.http.get<Restaurant[]>(this.apiurl);
  // }

  async getRestaurants(): Promise<any> {
    try {
      const response = await fetch(this.apiurl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  // deleteRestaurant(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiurl}/${id}`);
  // }
}
