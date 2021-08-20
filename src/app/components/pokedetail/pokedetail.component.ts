import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss']
})
export class PokedetailComponent implements OnInit {

  @Input() set url(u : string) {
    
    this._pokeService.getOne(u).subscribe((data : Pokemon) => {
      this.pokemon = data

    })
  }

  pokemon! : Pokemon

  constructor(
    private _pokeService : PokeServiceService
  ) { }
  

  ngOnInit(): void {
  }

}
