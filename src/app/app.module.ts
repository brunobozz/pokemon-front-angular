import { NgModule } from '@angular/core';

//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

//DECLARATIONS
import { AppComponent } from './app.component';

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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot(toastrConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
