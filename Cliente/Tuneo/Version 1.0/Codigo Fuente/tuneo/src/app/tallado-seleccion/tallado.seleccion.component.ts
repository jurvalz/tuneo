import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {HeaderTemplate,Seccion, ProductoRequest, Producto, Valoracion, TalladosOpcion} from '../common/common.class';
import { TalladoComponent} from '../tallado/tallado.component';
import * as action from './../actions/usuario.actions';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import * as Swiper from 'swiper/js/swiper.js';
@Component({
  selector: 'tallado.seleccion',
  templateUrl: './tallado.seleccion.component.html',
  styleUrls: ['./tallado.seleccion.component.scss']
})
export class TalladoSeleccionComponent implements OnInit {
  header:HeaderTemplate;
  coProducto: string;
  producto:Producto;
  estrellas:number[]=[];
  estrellasParcial:number[]=[];
  valoracion:Valoracion={coProducto:0,estrella5:0,estrella4:0,estrella3:0,estrella2:0,estrella1:0};
  total:number=0;
  promedio:number=0;
  medidas:string[]=[];
  materiales:string[]=[];
  acabados:string[]=[];

  medidasElec:string;
  materialesElec:string;
  acabadosElec:string;

  listaProductos: Producto[]=[];

  listaImagen: string[] = [];
  principalSlider:boolean = false;
  constructor(private store: Store<{section: any}>,private activatedRoute: ActivatedRoute,private apiService: ApiService) { 
    this.producto = {
			coProducto: null,
			tipo:null,
			claseEdad:null,
			claseUso:null,
			claseForma:null,
			claseTema:null,
			claseCategoria:null,
			nombre:null,
			puntuacion: null,
			voto: null,
			tipoCara:null,
			subtipoCara:null,
			valorCara:null,
			tipoBorde:null,
			valorBorde:null,
			material:null,
			medidas:null,
			peso: null,
			precio: null,
			precioMin: null,
			precioMax: null,
			precioOferta: null,
			imagenPatronGif:null,
			imagenPatronJpg:null,
			imagen:null,
			imagen3d:null,
      hover: null,
      tiempoEntrega:null
		};
  }
  ngOnInit(){
    this.header = new HeaderTemplate(
      TalladoComponent.RUTA_SVG,
        'logo',
        TalladoComponent.TITLE_ESPECIAL,
        TalladoComponent.SUB_TITLE_ESPECIAL,
		TalladoComponent.TITLE_ESPECIAL_MAIN,Seccion.Tienda );
	this.listaImagen = [
		"http://localhost:4200/assets/images/temporal/IMG-TAL05_1.jpg","http://localhost:4200/assets/images/temporal/IMG-TAL05_2.jpg",
		"http://localhost:4200/assets/images/temporal/IMG-TAL05_3.jpg","http://localhost:4200/assets/images/temporal/IMG-TAL05_4.jpg",
		"http://localhost:4200/assets/images/temporal/IMG-TAL05_5.jpg"
	];	
    let vsection:string = Seccion.Tienda;
    this.store.dispatch(action.section({vsection})); 
    this.coProducto = this.activatedRoute.snapshot.paramMap.get('id');
    let tipo:ProductoRequest = {"nombre":this.coProducto}; 
	this.apiService.getProductoCod(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.medidasElec = this.producto.medidas;
  			this.materialesElec = this .producto.material;
  			this.acabadosElec = this.producto.textoCara;
	});
	this.apiService.getProductoTallados(tipo).subscribe((data)=>{
		
		if(data.listProducto != null){
			this.listaProductos = data.listProducto;
			this.cargarListaOpciones();
		}
		
	});
	this.cambioValoracion(tipo); 
	
  }
  cargarListaOpciones():void{
	for(let item of this.listaProductos){
		if(!this.materiales.includes(item.material)){
			this.materiales.push(item.material);
		}
		if(!this.medidas.includes(item.medidas)){
			this.medidas.push(item.medidas);
		}
		if(!this.acabados.includes(item.textoCara)){
			this.acabados.push(item.textoCara);
		}
	};
  }
  cargarMaterial():void{
	let codigo:string = null;
	for(let item of this.listaProductos){
		if(item.material==this.materialesElec && item.textoCara==this.acabadosElec && item.medidas==this.medidasElec){
			codigo = item.coProducto.toString();
			break;
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.material==this.materialesElec && item.textoCara==this.acabadosElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.material==this.materialesElec && item.medidas==this.medidasElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.material==this.materialesElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}

	let tipo:ProductoRequest = {"nombre":codigo}; 
	this.apiService.getProductoCod(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.medidasElec = this.producto.medidas;
  			this.materialesElec = this .producto.material;
  			this.acabadosElec = this.producto.textoCara;
	});
  }
  cargarAcabado():void{
	let codigo:string = null;
	for(let item of this.listaProductos){
		if(item.material==this.materialesElec && item.textoCara==this.acabadosElec && item.medidas==this.medidasElec){
			codigo = item.coProducto.toString();
			break;
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.material==this.materialesElec && item.textoCara==this.acabadosElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.textoCara==this.acabadosElec && item.textoCara==this.acabadosElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.textoCara==this.acabadosElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}

	let tipo:ProductoRequest = {"nombre":codigo}; 
	this.apiService.getProductoCod(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.medidasElec = this.producto.medidas;
  			this.materialesElec = this .producto.material;
  			this.acabadosElec = this.producto.textoCara;
	});
  }
  cargarMedidas():void{
	let codigo:string = null;
	for(let item of this.listaProductos){
		if(item.material==this.materialesElec && item.textoCara==this.acabadosElec && item.medidas==this.medidasElec){
			codigo = item.coProducto.toString();
			break;
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.material==this.materialesElec && item.medidas==this.medidasElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.textoCara==this.acabadosElec && item.medidas==this.medidasElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}
	if(codigo == null){
		for(let item of this.listaProductos){
			if(item.medidas==this.medidasElec){
				codigo = item.coProducto.toString();
				break;
			}
		}
	}

	let tipo:ProductoRequest = {"nombre":codigo}; 
	this.apiService.getProductoCod(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.medidasElec = this.producto.medidas;
  			this.materialesElec = this .producto.material;
  			this.acabadosElec = this.producto.textoCara;
	});
  }
  cambioValoracion(tipo:ProductoRequest):void{
		this.apiService.getValoracion(tipo).subscribe((data)=>{
			this.valoracion = data;  
			this.total = this.valoracion.estrella5+this.valoracion.estrella4+this.valoracion.estrella3+this.valoracion.estrella2+this.valoracion.estrella1;
			this.promedio =  (this.valoracion.estrella5*5+this.valoracion.estrella4*4+this.valoracion.estrella3*3+this.valoracion.estrella2*2+this.valoracion.estrella1)/(this.valoracion.estrella5+this.valoracion.estrella4+this.valoracion.estrella3+this.valoracion.estrella2+this.valoracion.estrella1);			
			this.estrellas=[];
			let index:number = 0;
			for (index = 0; index < this.promedio; index++) {
				this.estrellas.push(index);								
			}
			if(index - this.promedio > 0.01){
				this.estrellas.pop();
			}
			this.estrellasParcial=[];	
			if(index-this.promedio>0){
				this.estrellasParcial.push(index);
			}			
		});
	}
	verGaleria(){
		this.principalSlider = true;
		setTimeout(() => {
			cargarSliderInterno();
		  }, 1000);  
	}
	retornar(){
		this.principalSlider = false;
	}
}
let swiperInner = null;
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