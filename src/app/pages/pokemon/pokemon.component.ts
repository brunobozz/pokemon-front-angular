import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  EffectCreative,
} from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  EffectCreative,
]);

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  public pokemons: any = [];
  public type: string = '';
  public activeIndex: number = 0;
  public selectedPokemon: number = 0;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      console.log(params['id']);
      if (params['id']) {
        this.selectedPokemon = Number(params['id']);
        if (params['id'] != '1') {
          this.getPokemon(Number(params['id']) - 1);
        }
        this.getPokemon(params['id']);
        this.getPokemon(Number(params['id']) + 1);
      }
    });
  }

  public getPokemon(id: number, wherePut?: string) {
    this.api
      .getData('pokemon/' + id.toString())
      .subscribe(async (data: any) => {
        await this.pokemons.push(data);
        console.log(this.pokemons);
      });
  }

  onSlideChange(event: any) {
    this.activeIndex = event[0].activeIndex;
    console.log(this.activeIndex);
    if (event[0].activeIndex >= 1) {
      // this.selectedPokemon = this.selectedPokemon + 1;
      // this.getPokemon(this.selectedPokemon);
    }
  }
}
