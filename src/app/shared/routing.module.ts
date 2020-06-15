import { NgModule, ModuleWithProviders } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import { LineaComponent } from 'src/app/pages/linea/linea.component';
import { CategoriaComponent } from 'src/app/pages/categoria/categoria.component';
import { ProductoComponent } from '../pages/producto/producto.component';
import { ProductosComponent } from '../pages/productos/productos.component';




/*se importan los componentes creados */

const appRoutes: Routes = [

  { path : 'linea' , component: LineaComponent },
  { path : 'categoria/:id' , component: CategoriaComponent },
  {path : 'producto/:id' , component: ProductoComponent },
  {path : 'productos' , component: ProductosComponent},
 
  // otherwise redirect to home
  { path: '**', redirectTo: 'linea',pathMatch: 'full' }
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes,{ useHash: true})
    
  ],
  exports : [
    RouterModule
  ]
})
export class RoutingModule {}
