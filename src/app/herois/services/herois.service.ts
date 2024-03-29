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



  getHeroiPorId(id: string): Observable<Heroi> {
    return this.http.get<Heroi>(`${this.urlDefault}/heroes/${id}`);
  }

  getAutoComplete(pesquisa: string): Observable<Heroi[]> {
    return this.http.get<Heroi[]>(`${this.urlDefault}/heroes?q=${pesquisa}&_limit=6`);
  }


  //CRUD
  PostHeroiAdd(heroi: Heroi): Observable<Heroi> {
    return this.http.post<Heroi>(`${this.urlDefault}/heroes`, heroi);
  }

  getHerois() {
    return this.http.get<Heroi[]>(`${this.urlDefault}/heroes`);
  }

  PutAtualizarHeroi(heroi: Heroi): Observable<Heroi> {
    return this.http.put<Heroi>(`${this.urlDefault}/heroes/${heroi.id}`, heroi);
  }

  DeleteHeroi(id: string): Observable<{}> {
    return this.http.delete<any>(`${this.urlDefault}/heroes/${id}`);
  }
}
