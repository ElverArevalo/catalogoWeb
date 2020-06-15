import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  totalCategoria: number = 0;
  categoriaPorPagina: number = 0;
  constructor(public http: HttpClient) { }

  
  cargaCategoria(lineaId: string, desde:number = 0) {
    let url = URL_SERVICIOS + '/categoria/page/'+ lineaId + '?desde=' + desde
   
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalCategoria = resp.total
     
        return resp.categoriaweb;
      }));
  }
  buscar(termino: string, lineaId: any) {
    let url = URL_SERVICIOS + '/categoria/page/web/' + termino + '/' + lineaId;
    return this.http.get(url)
      .pipe(map((resp: any) => {
        this.totalCategoria = resp.total
        this.categoriaPorPagina = resp.length;
        return resp.categoriaweb;
      }));

  }


}
