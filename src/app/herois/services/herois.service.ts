import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroi } from '../interfaces/herois.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  urlDefault: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getHerois() {
    return this.http.get<Heroi[]>(`${this.urlDefault}/heroes`);
  }

  getHeroiPorId(id: string): Observable<Heroi> {
    return this.http.get<Heroi>(`${this.urlDefault}/heroes/${id}`);
  }

  getAutoComplete(pesquisa: string): Observable<Heroi[]> {
    return this.http.get<Heroi[]>(`${this.urlDefault}/heroes?q=${pesquisa}&_limit=6`);
  }
}
