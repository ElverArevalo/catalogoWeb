import { Component, OnInit } from '@angular/core';
import { LineaService } from 'src/app/services/linea.service';
import { Router } from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {
  lineas=[];
  desde: number = 0;
  totalRegistro: number = 0;
  
  constructor(public serviceLinea: LineaService,
    public router:Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner();
    this.cargarLinea();
  }

  spinner() {
    this.spinnerService.show();
    setTimeout(() => {
        this.spinnerService.hide();
    },2000);
  }
  cargarLinea(){
    this.serviceLinea.cargarLinea(this.desde)
    .subscribe((resp)=> {
      this.spinner();
      this.lineas = resp;
      this.totalRegistro = this.serviceLinea.totalLinea
     });

  }


  paginacionDesde(valor: number = 0) {

    let desde = this.desde + valor;
  
    if (desde >= this.serviceLinea.totalLinea) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde = desde;
    this.spinner();
    this.cargarLinea();
  }
  buscarLinea( termino: string ) {
    
    if (termino.trim() == "") {
      this.cargarLinea();
    return;
    }
  
  this.serviceLinea.buscarLine(termino)
  .subscribe((lineas)=> {
     this.lineas = lineas;
     this.totalRegistro =this.serviceLinea.totalLinea
  
  })
  }
  verTodoProductos() {
    this.router.navigate(['/productos']);
  }

}
