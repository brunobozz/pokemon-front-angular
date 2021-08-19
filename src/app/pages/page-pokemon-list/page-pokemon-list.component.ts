import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-pokemon-list',
  templateUrl: './page-pokemon-list.component.html',
  styleUrls: ['./page-pokemon-list.component.scss'],
})
export class PagePokemonListComponent implements OnInit {
  public loading = false;
  public endpoint: string = '';
  private dados: any = [];
  public pokemonList: any = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemonList('https://pokeapi.co/api/v2/pokemon');
  }

  public getPokemonList(endpoint: string) {
    this.loading = true;
    this.api.getEndpoint(endpoint).subscribe((data) => {
      this.dados = data;
      this.endpoint = this.dados.next;
      this.pokemonList = this.pokemonList.concat(this.dados.results);
      this.loading = false;
    });
  }

  public goToPokemon(id: number) {
    console.log(id);
    this.router.navigateByUrl('pokemon/' + id);
  }
}
