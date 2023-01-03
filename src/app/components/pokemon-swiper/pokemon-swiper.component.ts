import { Component, Input } from '@angular/core';

import SwiperCore, { Virtual } from 'swiper';
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-pokemon-swiper',
  templateUrl: './pokemon-swiper.component.html',
  styleUrls: ['./pokemon-swiper.component.scss'],
})
export class PokemonSwiperComponent {
  @Input() pokemons: any;
  @Input() type: string = '';

  onSlideChange(event: any) {
    // this.activeIndex = event[0].activeIndex;
    // console.log(this.activeIndex);
    if (event[0].activeIndex >= 1) {
      // this.selectedPokemon = this.selectedPokemon + 1;
      // this.getPokemon(this.selectedPokemon);
    }
  }
}
