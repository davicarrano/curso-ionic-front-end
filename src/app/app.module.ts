import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './services/domain/categoria.service' ;
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ProdutoService } from './services/domain/produto.service';
import { CartService } from './services/cart.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/domain/cliente.service';
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:5000']
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    JwtModule.forRoot({
      jwtOptionsProvider: {provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [StorageService],
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    AuthService,
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    ProdutoService,
    CartService,
    ClienteService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  
  exports:[
    ReactiveFormsModule,
    FormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
