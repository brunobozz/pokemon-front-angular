import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePokemonListComponent } from './pages/page-pokemon-list/page-pokemon-list.component';
import { PagePokemonComponent } from './pages/page-pokemon/page-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon/1',
    pathMatch: 'full',
  },
  {
    path: 'pokemon-list',
    component: PagePokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ArrayOfRoutes = [
  PagePokemonListComponent,
  PagePokemonComponent,
  PokemonComponent,
];
