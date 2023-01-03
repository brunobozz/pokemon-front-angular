import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//SERVICES
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';

//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, ArrayOfRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { CompLoadingComponent } from './components/comp-loading/comp-loading.component';
import { PokemonNameComponent } from './components/pokemon-name/pokemon-name.component';
import { PokemonImageComponent } from './components/pokemon-image/pokemon-image.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSwiperComponent } from './components/pokemon-swiper/pokemon-swiper.component';

@NgModule({
  declarations: [
    AppComponent,

    ArrayOfRoutes,
    CompLoadingComponent,
    PokemonNameComponent,
    PokemonImageComponent,
    PokemonInfoComponent,
    PokemonCardComponent,
    PokemonSwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
