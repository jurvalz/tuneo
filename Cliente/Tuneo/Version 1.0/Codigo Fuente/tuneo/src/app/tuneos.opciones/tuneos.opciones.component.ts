import { Component, OnInit } from '@angular/core';
import {TuneosOpcionesEnum} from './../common/common.class';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'opciones',
  templateUrl: './tuneos.opciones.component.html',
  styleUrls: ['./tuneos.opciones.component.scss']
})

export class TuneosOpcionesComponent implements OnInit {
  
  opcion:number;
  access:boolean;
  login$ : Observable<any>;
  constructor(private store: Store<{login: any}>) { }

  ngOnInit() {
    //this.opcion=TuneosOpcionesEnum.mensajes;
    this.access = false;
    this.opcion=TuneosOpcionesEnum.carrito;
    this.login$ = this.store.pipe(select('login'));
    this.login$.subscribe( res => {
      if(res.codigo != ''){
        this.access = true;
      }
      
    });
  }
  isOpcion(opcion:number):boolean{
    
    return opcion==this.opcion?true:false;
  }
  setOpcion(opcion:number,obj:Element):void{
    if(!this.access){
      return ;
    }
    let lis = document.querySelectorAll('ul.nav-tuneo li');
    lis.forEach(element => {
      element.className = element.className.replace(" selected","");
    });
    //console.log(obj);
    this.opcion=opcion;    
    obj.className=obj.className+ " selected";
  }

}
