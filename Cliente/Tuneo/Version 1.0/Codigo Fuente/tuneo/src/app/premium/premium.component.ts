import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { HeaderTemplate,GrillaProductoTemplate,Seccion, ProductoRequest, Patron } from '../common/common.class';
import {ApiService} from './../api.service';
import * as action from './../actions/usuario.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {
    public static TITLE_PREMIUM_MAIN:string='PREMIUM'; 
    public static TITLE_PREMIUM:string='"Diseñando la vida es más sabrosa".'; 
    public static SUB_TITLE_PREMIUM:string='Nos gustan los retos, si tienes una idea, quedamos a tu disposición.'; 
    productos:GrillaProductoTemplate;
    header:HeaderTemplate;
    patrones: Patron[];
    premiums$ : Observable<any>;
    constructor(private apiService: ApiService,private store: Store<{section: any}>,private storePremium: Store<{premium: any}>) { }
    ngOnInit(){
        this.header = new HeaderTemplate(HeaderTemplate.RUTA+'premiumS.svg','logo',
        PremiumComponent.TITLE_PREMIUM,
        PremiumComponent.SUB_TITLE_PREMIUM,
        PremiumComponent.TITLE_PREMIUM_MAIN,Seccion.Tienda);
        let tipo:ProductoRequest = {"nombre":"PREMIUM"}; 
        let vsection:string = Seccion.Tienda;
        this.store.dispatch(action.section({vsection})); 
        this.apiService.getProductosTipo(tipo).subscribe((data)=>{
          let vlista:Patron[] = data.lista;
          this.patrones = data.lista;
          this.storePremium.dispatch(action.premium({vpatrones:vlista}));
        });
    }
    filtrar(filtro: number):void{
      let vlista:Patron[] = this.patrones;
      vlista = vlista.filter(function(item) {
        let json = JSON.parse(item.caracteristicas);
        return json.caracteristicas.includes(filtro);
      });
      //console.log(vlista);
      this.storePremium.dispatch(action.premium({vpatrones:vlista}));
    }
}
