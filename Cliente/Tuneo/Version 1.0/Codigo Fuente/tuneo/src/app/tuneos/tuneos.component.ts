import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { HeaderTemplate,Seccion } from '../common/common.class';
import * as Swiper from 'swiper/js/swiper.js';
import * as action from './../actions/usuario.actions';
@Component({
  selector: 'tuneos',
  templateUrl: './tuneos.component.html',
  styleUrls: ['./tuneos.component.scss']
})
export class TuneosComponent implements OnInit {

    header:HeaderTemplate;
    constructor(private store: Store<{section: any}>){
        this.header = new HeaderTemplate(HeaderTemplate.RUTA+'logo.svg','logo','Mis tuneos','',null,Seccion.Tienda);
        let vsection:string = Seccion.Tienda;
        this.store.dispatch(action.section({vsection})); 
    }
    ngOnInit(){
      cargarSlider();
    }

}
function cargarSlider():void {
  
  let swiper = new Swiper('.swiper-container-pedidos', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
}
