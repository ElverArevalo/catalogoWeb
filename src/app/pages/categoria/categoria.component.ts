import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
lineaId:string;
categorias:any[];
desde: number = 0;
totalRegistro:number;

  constructor(public routerActive: ActivatedRoute, 
    public serviceCategoria: CategoriaService,
    public router: Router) { }

  ngOnInit(): void {
 
    this.routerActive.params.subscribe(
      params => {
        this.lineaId = params['id'];
      
       
      }
    );
    this.cargarCategoria();
  }

  cargarCategoria() {
    this.serviceCategoria.cargaCategoria(this.lineaId, this.desde)
    .subscribe((resp:any) =>{
      this.categorias= resp;
      this.totalRegistro= this.serviceCategoria.totalCategoria;
    })
    

  }

  paginacionDesde(valor: number = 0) {

    let desde = this.desde + valor;
  
    if (desde >= this.serviceCategoria.totalCategoria) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde = desde;
    this.cargarCategoria();
  }
  buscarCategoria( termino: string ) {

    if (termino.trim() == "") {
      this.cargarCategoria();
    return;
    }
  
  this.serviceCategoria.buscar(termino, this.lineaId)
  .subscribe((categorias)=> {
     this.categorias = categorias;
     this.totalRegistro =this.serviceCategoria.totalCategoria
  
  })
  }

  verProductos() {
    this.router.navigate(['/productos'])

  }

}
