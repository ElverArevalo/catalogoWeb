import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  categoriaId:string;
  productos:any[];
  desde: number = 0;
  totalRegistro;
  constructor(public routerActive: ActivatedRoute,
    public serviceProducto: ProductoService,
    public router: Router) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(
      params => {
        this.categoriaId = params['id'];
      
       
      }
    );
    this.cargarProducto();
  }
  cargarProducto(){
    this.serviceProducto.cargaProducto( this.categoriaId , this.desde)
    .subscribe((resp:any) => {
      this.productos = resp;
      this.totalRegistro = this.serviceProducto.totalProducto;
    });

  }

  paginacionDesde(valor:number = 0) {
      
    let desde = this.desde + valor;
  
    if (desde >= this.serviceProducto.totalProducto) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde = desde;
    console.log(this.desde);
    this.cargarProducto();
  }

  buscarproducto( termino: string ) {

    if (termino.trim() == "") {
      this.cargarProducto();
    return;
    }
  
  this.serviceProducto.buscar(termino, this.categoriaId)
  .subscribe((productos)=> {
     this.productos = productos;
     this.totalRegistro =this.serviceProducto.totalProducto;
  
  })
  }

  verLineas() {
    this.router.navigate(['/linea']);
  }

}
