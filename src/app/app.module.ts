import { NgModule } from '@angular/core';

//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

//DECLARATIONS
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CompCarouselComponent } from './components/comp-carousel/comp-carousel.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { PagePokemonListComponent } from './pages/page-pokemon-list/page-pokemon-list.component';
import { CompListGroupComponent } from './components/comp-list-group/comp-list-group.component';
import { PagePokemonComponent } from './pages/page-pokemon/page-pokemon.component';
import { CompLoadingComponent } from './components/comp-loading/comp-loading.component';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

const toastrConfig = {
  timeOut: 3000,
  positionClass: 'toast-top-right',
  maxOpened: 2,
  autoDismiss: true,
};

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    CompCarouselComponent,
    CompNavbarComponent,
    PagePokemonListComponent,
    CompListGroupComponent,
    PagePokemonComponent,
    CompLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot(toastrConfig),
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
