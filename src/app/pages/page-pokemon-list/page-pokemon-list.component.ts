import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-pokemon-list',
  templateUrl: './page-pokemon-list.component.html',
  styleUrls: ['./page-pokemon-list.component.scss'],
})
export class PagePokemonListComponent implements OnInit {
  public pokemonList: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList() {
    this.api.getInfo('pokemon').subscribe((data) => {
      this.pokemonList = data;
      console.log(this.pokemonList.results);
    });
  }
}
