import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  public pokemons: any;
  public type: string = '';
  public selectedPokemon?: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.getPokemon(50);

    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.selectedPokemon = params['id'];
      }
    });
  }

  public getPokemon(quantity: number) {
    let pokemons: any = [];
    for (let i = 1; i <= quantity; i++) {
      this.api.getData('pokemon/' + i).subscribe((data: any) => {
        pokemons.push(data);
      });
      if (i == quantity) {
        this.pokemons = pokemons;
      }
    }
  }
}
