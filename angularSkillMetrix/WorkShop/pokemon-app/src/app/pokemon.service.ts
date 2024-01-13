import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  private url = 'https://pokeapi.co/api/v2/pokemon'
  searchPokemons(name: string) {
    return this.http.get<any>(`${this.url}?name=${name}`);
  }
  getPokemonData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
