import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { typeColors } from './pokemon-colors';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.scss'],
})
export class PagePokemonComponent implements OnInit {
  public endpoint: string = '';
  public pokemon: any = [];
  public location: any = [];
  public pokemonId = '';
  private typeColors = typeColors;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPokemon('https://pokeapi.co/api/v2/pokemon/' + params['id']);
    });
  }

  public getPokemon(endpoint: string) {
    this.api.getEndpoint(endpoint).subscribe((data) => {
      this.pokemon = data;
      this.convertPokemonId(this.pokemon.id);
      this.chageIndex();
      console.log(this.pokemon);
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

  private chageIndex() {
    this.titleService.setTitle(
      this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
    ); //captalized string

    //identify color of type
    let type = this.typeColors.find(
      (x: any) => x.type === this.pokemon.types[0].type.name
    );
    this.metaService.updateTag({
      name: 'theme-color',
      content: type.color,
    });
  }

  public changePokemon(id: number) {
    this.router.navigateByUrl('pokemon/' + id);
  }
}
