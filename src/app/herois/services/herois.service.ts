import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroi } from '../interfaces/herois.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }

  getHerois() {
    return this.http.get<Heroi[]>('http://localhost:3000/heroes');
  }
}
