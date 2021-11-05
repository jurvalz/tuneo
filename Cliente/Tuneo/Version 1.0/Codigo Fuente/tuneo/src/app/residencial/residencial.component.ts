import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { HeaderTemplate,Seccion,PresentacionRequest,Proyecto, MensajeRequest } from '../common/common.class';
import {ApiService} from './../api.service';
import * as Swiper from 'swiper/js/swiper.js';
import * as action from './../actions/usuario.actions';
@Component({
  selector: 'app-residencial',
  templateUrl: './residencial.component.html',
  styleUrls: ['./residencial.component.scss']
})
export class ResidencialComponent implements OnInit {
  header:HeaderTemplate;
  listaProyectos:Proyecto[]=[];
  principalSlider:boolean = false;
  proyecto:Proyecto = null;
  correo: string;
  mensaje:string;
  correoIni:boolean = true;
  constructor(private apiService: ApiService,private store: Store<{section: any}>) { 
    this.header = new HeaderTemplate(HeaderTemplate.RUTA+'tuneo-arq.svg','logoHome','','',null,Seccion.Arquitectura);
    
  } 

  ngOnInit(){
    this.header = new HeaderTemplate(HeaderTemplate.RUTA+'tuneo-arq.svg','logoHome','','',null,Seccion.Arquitectura);
    let vsection:string = Seccion.Arquitectura;
    this.store.dispatch(action.section({vsection})); 
    let presentacionRequest:PresentacionRequest = {"coTipoProyecto":"1"}
    this.principalSlider = true;
    this.apiService.getPresentacion(presentacionRequest).subscribe((data)=>{
      this.listaProyectos = data.lista; 
      this.proyecto = this.listaProyectos[0];  
      setTimeout(() => {
        cargarSlider();
      }, 1000);
    });
  }
  verProyecto(indice:number){
    this.proyecto = this.listaProyectos[indice];
    this.principalSlider = false;
    setTimeout(() => {
      cargarSliderInterno();
    }, 1000);    
  }
  retornar(){
    this.principalSlider = true;
    setTimeout(() => {
      cargarSlider();
    }, 200);
  }
  abrirEnvio():void{
    let t : HTMLElement = document.querySelector('#miModalResidencial');
    t.className='modal';
    t.style.opacity='1';
    this.correoIni = true;
  }
  cerrar():void{
    let t : HTMLElement = document.querySelector('#miModalResidencial');
		t.className='hidden';
		t.style.opacity="0";
  }
  enviarMensaje():void{
    if(this.correo != null || this.correo.trim()==""){
      let vmensaje: MensajeRequest = {
        coUsuario: this.correo,
        an: "Consulta proyecto residencial "+this.proyecto.nombre,
        mje: this.mensaje
      };
      this.apiService.setMensaje(vmensaje).subscribe((data) =>{
        this.correoIni = false;
        if(data.ok){
          let t : HTMLElement = document.querySelector('#miModalResidencial');
          t.className='modal';
          t.style.opacity='1';
        }
        else{
          console.log("no enviado");
        }        
      });
    }
    
  }
}
let swiper = null;
let swiperInner = null;
function cargarSlider():void {
  
  swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
    },
    pagination: {
        el: '.swiper-pagination',
    }
  });
  
}
function cargarSliderInterno():void{
  
  swiperInner = new Swiper('.swiper-container-inner', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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