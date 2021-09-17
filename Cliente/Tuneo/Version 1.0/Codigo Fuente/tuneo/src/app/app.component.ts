import { Component,OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Seccion} from './common/common.class';
import * as action from './actions/usuario.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'tuneo';
  seccion:string=Seccion.Arquitectura;
  section$ : Observable<any>;
  constructor(private store: Store<{section: any}>){
    
    let URLactual = window.location.pathname;
    if(URLactual.search('arq$')>0){
      this.seccion = Seccion.Arquitectura;
    }
    else{
      this.seccion = Seccion.Tienda;
    } 
    
    
  }
  ngOnInit(): void {
    
    setTimeout(() => {
      this.section$ = this.store.pipe(select('section'));
      this.section$.subscribe( res => {
        this.seccion = res.section;
          if(this.seccion==Seccion.Arquitectura){
            document.querySelector('#titTuneoT').className='tituloClosex hidden';
            document.querySelector('#titTuneoA').className='tituloClosex white';
          }
          else if(this.seccion==Seccion.Tienda){        
            document.querySelector('#titTuneoT').className='tituloClosex';
            document.querySelector('#titTuneoA').className='tituloClosex hidden';
          }  
        
      });
    },);
  }
  public cambiaSeccion():void{
    if(this.seccion==Seccion.Arquitectura){
      let vsection:string = Seccion.Tienda;
      this.store.dispatch(action.section({vsection}));
      this.seccion = Seccion.Tienda;
      let sw:any = document.querySelector('#tienda');
      sw.click();
      document.querySelector('#titTuneoT').className='tituloClosex';
      document.querySelector('#titTuneoA').className='tituloClosex hidden';
    }
    else if(this.seccion==Seccion.Tienda){
      let vsection:string = Seccion.Arquitectura;
      this.store.dispatch(action.section({vsection}));
      this.seccion = Seccion.Arquitectura;
      let sw:any = document.querySelector('#arq');
      sw.click();
      document.querySelector('#titTuneoT').className='tituloClosex hidden';
      document.querySelector('#titTuneoA').className='tituloClosex white';
    }
    
  }

}
