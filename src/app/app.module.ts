import { NgModule } from '@angular/core';

//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, ArrayOfRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//DECLARATIONS
import { AppComponent } from './app.component';
import { CompCarouselComponent } from './components/comp-carousel/comp-carousel.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { CompLoadingComponent } from './components/comp-loading/comp-loading.component';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';
import { FormsModule } from '@angular/forms';

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

    ArrayOfRoutes,

    CompCarouselComponent,
    CompNavbarComponent,
    CompLoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
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
