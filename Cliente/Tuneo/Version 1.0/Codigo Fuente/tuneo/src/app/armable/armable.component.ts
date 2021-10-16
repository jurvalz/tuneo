import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {HeaderTemplate,GrillaProductoTemplate,Seccion, ProductoRequest, Patron} from '../common/common.class';
import {ApiService} from './../api.service';
import * as action from './../actions/usuario.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'armable',
  templateUrl: './armable.component.html',
  styleUrls: ['./armable.component.scss']
})
export class ArmableComponent implements OnInit {
  /*productos:GrillaProductoTemplate;*/
  header:HeaderTemplate;
  patrones: Patron[];
  armables$ : Observable<any>;
  constructor(private apiService: ApiService,private store: Store<{section: any}>,private storeArmables: Store<{armables: any}>) { 
    /*
    this.armables$ = this.storeArmables.pipe(select('armables'));
    this.armables$.subscribe( res => {
      this.patrones = res.lista; 
    });
    */
  }
  ngOnInit(){
    this.header = new HeaderTemplate(HeaderTemplate.RUTA+'armableS.svg','logo','"Organiza tu vida a partir de tus sueños".',' Muebles ensamblables en todas las formas que puedas imaginar. Pueden ser armados fácilmente y desarmados si necesitas transportarlos.','ARMABLES',Seccion.Tienda);
    let vsection:string = Seccion.Tienda;
    this.store.dispatch(action.section({vsection})); 

    //if(this.patrones== null || this.patrones.length==0){
      let tipo:ProductoRequest = {"nombre":"ARMABLE"}; 
      this.apiService.getProductosTipo(tipo).subscribe((data)=>{
        let vlista:Patron[] = data.lista;
        this.patrones = data.lista;
        this.storeArmables.dispatch(action.armables({vpatrones:vlista}));
      });
    //}
    
  }
  filtrar(filtro: number):void{
    let vlista:Patron[] = this.patrones;
    vlista = vlista.filter(function(item) {
      let json = JSON.parse(item.caracteristicas);
      return json.caracteristicas.includes(filtro);
    });
    //console.log(vlista);
    this.storeArmables.dispatch(action.armables({vpatrones:vlista}));
  }
  
}
