import { Component, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/models/pokemon.model';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  pokedex! : Pokedex
  toUrl : string = ""

  constructor(
    private _pokeService : PokeServiceService
  ) { }

  ngOnInit(): void {
    this.loadItems("https://pokeapi.co/api/v2/pokemon/")
  }

  loadItems(url : string) {
    this._pokeService.getAll(url).subscribe(
      (pokedexFromService : Pokedex) => {
        this.pokedex = pokedexFromService
      }
    )
  }

  clickPrevious() {
    this.loadItems(this.pokedex.previous ?? "")
  }

  clickNext() {
    this.loadItems(this.pokedex.next ?? "")
  }

  onClick(url : string) {
    this.toUrl = url
  }
}
