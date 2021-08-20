import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex, Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  getAll(url : string) : Observable<Pokedex> {
    return this._httpClient.get<Pokedex>(url)
  }

  getOne(url : string) : Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(url)
  }
}
