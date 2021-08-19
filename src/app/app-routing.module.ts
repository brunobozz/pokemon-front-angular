import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePokemonListComponent } from './pages/page-pokemon-list/page-pokemon-list.component';
import { PagePokemonComponent } from './pages/page-pokemon/page-pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'pokemon-list',
    component: PagePokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PagePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
