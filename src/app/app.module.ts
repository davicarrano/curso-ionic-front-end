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
import { CategoriaService } from './services/categoria.service';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ProdutoService } from './services/produto.service';
import { CartService } from './services/cart.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
