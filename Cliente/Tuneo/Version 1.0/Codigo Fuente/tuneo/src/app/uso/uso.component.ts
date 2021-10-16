import { Component, OnInit } from '@angular/core';
import { HeaderTemplate,Seccion } from '../common/common.class';

@Component({
  selector: 'uso',
  templateUrl: './uso.component.html',
  styleUrls: ['./uso.component.scss']
})
export class UsoComponent implements OnInit {
  
  public static TITLE_ESPECIAL:string='Un lugar para todo y todo en su lugar'; 
    public static SUB_TITLE_ESPECIAL:string='Muebels basados en módulos que se adaptan a tu espacio, siempre quedarán como hechos a medida e incluso podrán se reordenados si decides remodelar o mudarte'; 
    public static TITLE_ESPECIAL_MAIN:string='MODULARES'; 
    header:HeaderTemplate
    constructor() { }
    ngOnInit(){
        this.header = new HeaderTemplate(HeaderTemplate.RUTA+'modular.svg','logo',
        UsoComponent.TITLE_ESPECIAL,
        UsoComponent.SUB_TITLE_ESPECIAL,
        UsoComponent.TITLE_ESPECIAL_MAIN,Seccion.Tienda);
    }

}
