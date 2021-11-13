import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import {ProductoCarrito} from '../common/common.class';
@Component({
  selector: 'carrito-uno',
  templateUrl: './tuneos.carrito.uno.component.html',
  styleUrls: ['./tuneos.carrito.uno.component.scss']
})
export class TuneosCarritoUnoComponent implements OnInit {
  listaCarrito: ProductoCarrito[]=[];
  cantidades:number[]=[];
  total:number=0;
	carrito$ : Observable<any>;
  constructor(private storeCarrito: Store<{carrito: any}>) { }

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.cantidades.push(i);
    }
    this.carrito$ = this.storeCarrito.pipe(select('carrito'));
		this.carrito$.subscribe( res => {
      this.listaCarrito = res.productos;
      console.log(this.listaCarrito);
      this.total = 0;
      for (let i = 0; i < this.listaCarrito.length; i++) {
        this.total = this.total + this.listaCarrito[i].precioOferta;          
      }
		});
  }

}
