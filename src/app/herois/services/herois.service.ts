import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroi } from '../interfaces/herois.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  urlDefault: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getHerois() {
    return this.http.get<Heroi[]>(`${this.urlDefault}heroes`);
  }

  getHeroiPorId(id: string): Observable<Heroi> {
    return this.http.get<Heroi>(`${this.urlDefault}heroes/${id}`);
  }
}
