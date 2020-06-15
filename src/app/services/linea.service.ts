import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaService {
  totalLinea: number = 0;
  

  constructor(public http: HttpClient,
    public router: Router) { }


    cargarLinea(desde: number = 0) {

      let url = URL_SERVICIOS + '/linea/page?desde=' + desde;
      return this.http.get(url)
        .pipe(map((resp: any) => {
          this.totalLinea = resp.total
           return resp.lineaweb;
        }));
    }
    buscarLine(termino: string) {
      let url = URL_SERVICIOS + '/linea/page/web/' + termino;
      return this.http.get(url)
      .pipe( map((resp:any )=> resp.lineaweb))
    }
    
   
}
