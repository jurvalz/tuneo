import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import {GrillaProductoTemplate,Patron} from '../common/common.class';
const PAGINA_MUESTRA: number = 5; 
const CANTIDAD_GRILLA: number = 12;

@Component({
  selector: 'grilla-premium',
  templateUrl: './grilla-premium.component.html',
  styleUrls: ['./grilla-premium.component.scss']
})
export class GrillaPremiumComponent implements OnInit {

  productos: GrillaProductoTemplate;
  listaPaginaProducto: Patron[] = [];
  indicesPaginador:number[]=[];
  indiceSelect:number = 0;
  indiceMax:number = 0;
  premiums$ : Observable<any>;
  constructor(private storePremium: Store<{premium: any}>) { 
    this.productos = new GrillaProductoTemplate([],[]);
    this.premiums$ = this.storePremium.pipe(select('premium'));
    this.premiums$.subscribe( res => {
      this.productos.patrones = res.lista;
      if(this.productos.patrones!=null){
        this.listaPaginaProducto = this.productos.patrones.slice(0,CANTIDAD_GRILLA);      
        this.mostrarPaginador(0);
        this.indiceMax = Math.floor((this.productos.patrones.length)/CANTIDAD_GRILLA);
      }
      else{
        this.listaPaginaProducto = null;      
        this.indicesPaginador=[];
        this.indiceSelect = 0;
        this.indiceMax = 0;
      }      
    });
  }
  

  ngOnInit() {
    /*
    this.tallados$ = this.storeTallados.pipe(select('tallados'));
    this.tallados$.subscribe( res => {
      this.productos.patrones = res.lista;
      this.listaPaginaProducto = this.productos.patrones.slice(0,10);      
      this.mostrarPaginador(0);
      this.indiceMax = Math.floor((this.productos.patrones.length)/10);
    });
    */
    /*
    setTimeout(() => {
      this.listaPaginaProducto = this.productos.patrones.slice(0,10);      
      this.mostrarPaginador(0);
      this.indiceMax = Math.floor((this.productos.patrones.length)/10);
    }, 3000);
    */
  }

  paginadorProducto(indice:number):void{
    this.mostrarPaginador(indice);
    this.listaPaginaProducto = this.productos.patrones.slice(CANTIDAD_GRILLA*indice,CANTIDAD_GRILLA*(indice+1));    
  }
  mostrarPaginador(indice:number):void{
    this.indiceSelect = indice;
    if((this.productos.patrones.length)/CANTIDAD_GRILLA>1){
      this.indicesPaginador=[];
      if(indice-4<0){
        for (let index = 0 ; index < PAGINA_MUESTRA && index < (this.productos.patrones.length)/CANTIDAD_GRILLA; index++) {
          this.indicesPaginador.push(index);          
        }  
      }
      else if(indice+4>(this.productos.patrones.length)/CANTIDAD_GRILLA){
        for (let index = Math.ceil((this.productos.patrones.length)/CANTIDAD_GRILLA) - PAGINA_MUESTRA ; index <= this.indiceMax/*(this.productos.productos.length)/10*/; index++) {
          this.indicesPaginador.push(index);          
        }
      }
      else{
        for (let index = indice -4 ; index < indice+5; index++) {
          this.indicesPaginador.push(index);          
        }
      }      
    }
  }
}
