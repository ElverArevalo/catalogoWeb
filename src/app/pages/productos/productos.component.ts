import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productos:[];
    totalRegistro: number;
    productosLength;
    desde: number = 0;
  constructor(public serviceProductos: ProductosService,
    public router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner();
    this.cargarProductos();
  }
  spinner() {
    this.spinnerService.show();
    setTimeout(() => {
        this.spinnerService.hide();
    },2000);
  }

  cargarProductos(){
    this.serviceProductos.cargaProducto(this.desde)
    .subscribe((resp:any) => {
      this.spinner();
      this.productos = resp;
      this.totalRegistro = this.serviceProductos.totalProductos
  });

  }
  paginacionDesde(valor: number) {
    let desde = this.desde + valor;
    if (desde >= this.serviceProductos.totalProductos) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde = desde;
    this.spinner();
    this.cargarProductos();
  }

  buscaproductos( termino: string ) {

    if (termino.trim() == "") {
      this.cargarProductos();
    return;
    }
  
  this.serviceProductos.buscarProductos(termino)
  .subscribe((productos)=> {
     this.productos = productos;
     this.totalRegistro = (this.serviceProductos.totalProductos );
    
  })
  }
  verLineas() {
    this.router.navigate(['/linea']);
  }
 
  

}
