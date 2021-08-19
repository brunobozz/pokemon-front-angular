import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.scss'],
})
export class PagePokemonComponent implements OnInit {
  public endpoint: string = '';
  public dadosPokemon: any = [];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPokemon('https://pokeapi.co/api/v2/pokemon/' + params['id']);
    });
  }

  public getPokemon(endpoint: string) {
    this.api.getEndpoint(endpoint).subscribe((data) => {
      this.dadosPokemon = data;
      console.log(this.dadosPokemon);
    });
  }
}
