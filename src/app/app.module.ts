import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaComponent } from './pages/linea/linea.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NavarComponent } from './shared/navar/navar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RoutingModule } from './shared/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LineaService } from './services/linea.service';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    CategoriaComponent,
    ProductoComponent,
    ProductosComponent,
    NavarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
  
  ],
  providers: [LineaService,
              CategoriaService,
              ProductoService,
              ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
