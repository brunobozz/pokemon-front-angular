import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-pokemon-list',
  templateUrl: './page-pokemon-list.component.html',
  styleUrls: ['./page-pokemon-list.component.scss'],
})
export class PagePokemonListComponent implements OnInit {
  public pokemonList: any = [];
  public searchValue: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.getPokemonList('pokemon?limit=905');

    this.metaService.updateTag({
      name: 'theme-color',
      content: '#cc1717',
    });
  }

  public getPokemonList(endpoint: string) {
    this.api.getData(endpoint).subscribe((res: any) => {
      this.pokemonList = res.results;
    });
  }

  public goToPokemon(id: number) {
    this.router.navigateByUrl('pokemon/' + id);
  }

  public searchPokemon(event: any) {
    this.searchValue = event.target.value;
  }
}
