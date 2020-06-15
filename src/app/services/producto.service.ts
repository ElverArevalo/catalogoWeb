import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  totalProducto: number = 0;
 
  constructor(public http: HttpClient) { }

  cargaProducto( categoriId:string, desde: number = 0,) {
    console.log(desde);
    let url = URL_SERVICIOS + '/producto/page/' + categoriId + '?desde=' + desde;
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalProducto = resp.total
     
         return resp.productoweb;
      }));
  }

  buscar(termino: string, categoriaId: any) {
    let url = URL_SERVICIOS + '/producto/page/web/' + termino + '/' + categoriaId;
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalProducto = resp.total
       
        return resp.productoweb;
      }));

  }
}
