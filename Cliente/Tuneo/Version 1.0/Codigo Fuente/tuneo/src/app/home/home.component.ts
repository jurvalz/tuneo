import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { HeaderTemplate,Seccion } from '../common/common.class';
import * as action from './../actions/usuario.actions';
import * as Swiper from 'swiper/js/swiper.js';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  header:HeaderTemplate;
  constructor(private store: Store<{section: any}>) { 
    
  } 
  ngOnInit(){
      this.header = new HeaderTemplate(HeaderTemplate.RUTA+'logoS.svg','logoHome','Tunear','Del ingl. to tune; literalmente \'afinar\', \'ajustar\'. 1. tr. Adaptar algo a los gustos o intereses personales.',null,Seccion.Tienda);
      let vsection:string = Seccion.Tienda;
      this.store.dispatch(action.section({vsection})); 
      setTimeout(() => {
        cargarSliderInterno();
      }, 1000);  
  }
  registro():void{
    let t: HTMLElement = document.querySelector('#btnRegistro');
    t.click(); 
  }
}
let swiperInner = null;
function cargarSliderInterno():void{
  
  swiperInner = new Swiper('.swiper-container-inner',{
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
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
