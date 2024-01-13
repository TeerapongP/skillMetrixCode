import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-app';
  loading = true;
  resultVal: any[] = [];
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService, private http: HttpClient) {
    console.log("Test");
    this.onSearchPokemons.pipe(switchMap(seachText => {
      return this.pokemonService.searchPokemons(seachText);
    })).subscribe((res) => {
      console.log("RESULT : ", res);
    })
  }
  onSearchPokemons = new Subject<string>();
  ngOnInit() {
    this.fetchPokemons().subscribe(
      (pokemons) => {
        this.pokemons = pokemons;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching Pokemon:', error);
        this.loading = false;
      }
    );
      
  }
  seachPokemon(seachText: string) {
    this.onSearchPokemons.next(seachText);
  }
  fetchPokemons(): Observable<Pokemon[]> {
    return this.pokemonService.getPokemonData().pipe(
      switchMap((response: { results: { url: string }[] }) => {
        const observables: Observable<Pokemon>[] = response.results.map((result) => {
          const request = this.http.get<Pokemon>(result.url);
          return request;
        });
        return forkJoin(observables);
      }),
      catchError((error) => {
        console.error('Error fetching Pokemon details:', error);
        this.loading = false;
        return of([]); // Return an empty array on error
      })
    );
  }
}
