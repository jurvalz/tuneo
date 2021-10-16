import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { HeaderTemplate,GrillaProductoTemplate,Seccion, ProductoRequest, Patron } from '../common/common.class';
import {ApiService} from './../api.service';
import * as action from './../actions/usuario.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'modular',
  templateUrl: './modular.component.html',
  styleUrls: ['./modular.component.scss']
})
export class ModularComponent implements OnInit {
  public static TITLE_ESPECIAL:string='"Un lugar para todo y todo en su lugar".'; 
  public static SUB_TITLE_ESPECIAL:string='Muebles basados en módulos que se adaptan a tu espacio, siempre quedarán como hechos a medida e incluso podrán ser reordenados si decides remodelar o mudarte.'; 
  public static TITLE_ESPECIAL_MAIN:string='MODULARES'; 
  public static RUTA_SVG:string=HeaderTemplate.RUTA+'modularS.svg';
  productos:GrillaProductoTemplate;
  header:HeaderTemplate;
  modulares$ : Observable<any>;
  constructor(private apiService: ApiService,private store: Store<{section: any}>,private storeModulares: Store<{modulares: any}>) { }
  ngOnInit(){
      this.header = new HeaderTemplate(HeaderTemplate.RUTA+'modularS.svg','logo',
      ModularComponent.TITLE_ESPECIAL,
      ModularComponent.SUB_TITLE_ESPECIAL,
      ModularComponent.TITLE_ESPECIAL_MAIN,Seccion.Tienda);
      let vsection:string = Seccion.Tienda;
      this.store.dispatch(action.section({vsection})); 
      let tipo:ProductoRequest = {"nombre":"MODULAR"}; 
      this.apiService.getProductosTipo(tipo).subscribe((data)=>{
        this.productos = new GrillaProductoTemplate(null,data.lista);
        let vlista:Patron[] = data.lista;
        this.storeModulares.dispatch(action.modulares({vpatrones:vlista}));      
      }); 
  }

}
