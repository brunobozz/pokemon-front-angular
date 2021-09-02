import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.scss'],
})
export class PagePokemonComponent implements OnInit {
  public endpoint: string = '';
  public dadosPokemon: any = [];
  public location: any = [];
  public pokemonId = '';

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private loading: LoadingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPokemon('https://pokeapi.co/api/v2/pokemon/' + params['id']);
    });
  }

  public getPokemon(endpoint: string) {
    this.api.getEndpoint(endpoint).subscribe((data) => {
      this.dadosPokemon = data;
      this.convertPokemonId(this.dadosPokemon.id);
    });
  }

  private convertPokemonId(id: number) {
    let strId = id.toString();
    if (strId.length === 1) {
      this.pokemonId = '00' + strId;
    }
    if (strId.length === 2) {
      this.pokemonId = '0' + strId;
    }
    if (strId.length === 3) {
      this.pokemonId = strId;
    }
  }

  public changePokemon(id: number) {
    this.router.navigateByUrl('pokemon/' + id);
  }
}
