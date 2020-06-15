import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  totalProductos: number = 0;
 
  productoPorPagina: number = 0;
  constructor(public http: HttpClient) { }


  cargaProducto(desde: number = 0) {
   
    let url = URL_SERVICIOS + '/productos?desde=' + desde;
    
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalProductos = resp.total
         return resp.productosWeb;

      }));
  }
  buscarProductos(termino: string, ) {
    let url = URL_SERVICIOS + '/productos/' + termino;
    return this.http.get(url)
    .pipe( map((resp:any )=> {
     
      return resp.productosWeb
      
    }));
  }

  
  
}
