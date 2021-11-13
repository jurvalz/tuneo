import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import {HeaderTemplate,Seccion,ProductoRequest,Producto, Valoracion, ProductoCarrito} from '../common/common.class';
import {ApiService} from './../api.service';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as action from './../actions/usuario.actions';
//import Stats from 'three/examples/jsm/libs/stats.module';
enum TipoSuperficie{
	Laminado = "L", Pintado = "P"
}
enum TipoColor{
	Color = "C", Madera = "M"
}
enum TipoCanto{
	Pintado = "P", PVC = "PVC"
}
@Component({
  selector: 'armable.seleccion',
  templateUrl: './armable.seleccion.component.html',
  styleUrls: ['./armable.seleccion.component.scss']
})

export class ArmableSeleccionComponent implements OnInit {
	header:HeaderTemplate
	tipoSuperficie:string;
	tipoColor:string;
	tipoCanto:string;
	listaCantoPintado:string[] = [];
	listaCantoSuperficie:string[] = [];
	listaCanto:string[];
	listaLaminadoColor:string[] = [];
	listaLaminadoMadera:string[] = [];
	listaPintadoColor:string[] = [];
	listaSuperficie:string[];
	coProducto: string;
	producto:Producto;
	valorCara: string;
	valorBorde: string;
	estrellas:number[]=[];
	estrellasParcial:number[]=[];
	valoracion:Valoracion={coProducto:0,estrella5:0,estrella4:0,estrella3:0,estrella2:0,estrella1:0};
	total:number=0;
	promedio:number=0;
	listaCarrito: ProductoCarrito[]=[];
	carrito$ : Observable<any>;
	constructor(private activatedRoute: ActivatedRoute,private apiService: ApiService,private store: Store<{section: any}>,
		private storeCarrito: Store<{carrito: any}>
		) {
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
			hover: null
		};
   	}
	cambioSuperficie(tipoSuperficie):void{
		this.tipoSuperficie = tipoSuperficie;
		if(this.tipoSuperficie==TipoSuperficie.Laminado){
			this.listaSuperficie = this.listaLaminadoColor;
			this.tipoColor = TipoColor.Color;
			this.tipoCanto = TipoCanto.Pintado;
			this.listaCanto = this.listaCantoPintado;
		}
		else{
			this.listaSuperficie = this.listaPintadoColor;
			this.tipoColor = TipoColor.Color;
			this.tipoCanto = TipoCanto.Pintado;
			this.listaCanto = this.listaCantoPintado;
		}
	}
	cambioColor(color):void{
		this.tipoColor = color;
		if(this.tipoColor == TipoColor.Color){
			this.listaSuperficie = this.listaLaminadoColor;
			this.tipoCanto = TipoCanto.Pintado;
			this.listaCanto = this.listaCantoPintado;
		}
		else{
			this.listaSuperficie = this.listaLaminadoMadera;
			this.tipoCanto = TipoCanto.PVC;
			this.listaCanto = this.listaCantoSuperficie;
		}
	}
	cambioCanto(canto):void{
		this.tipoCanto = canto;
	}
	indiceFiguraSuperficie:number;
	indiceFiguraCanto:number;
	cambioFiguraSuperficie(cara:string):void{
		this.valorCara = cara;

		let tipo:ProductoRequest = {nombre:this.producto.coProducto.toString(),valorCara:this.valorCara,valorBorde:null}; 
		
		this.apiService.getProductoCaraBordePatron(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.valorCara = this.producto.valorCara;
			this.valorBorde = this.producto.valorBorde;
			let tip:ProductoRequest = {nombre:this.producto.coProducto.toString(),valorCara:null,valorBorde:null}; 
			this.cambioValoracion(tip);
			init(this.producto.imagen3d,this.producto.perspectiva,this.producto.width,this.producto.height,
				this.producto.cp_x,this.producto.cp_y,this.producto.cp_z,this.producto.ct_x,this.producto.ct_y,
				this.producto.ct_z,this.producto.hl_x,this.producto.hl_y,this.producto.hl_z);
			animate();
		}); 
		
		
		
		
	}
	cambioFiguraCanto(borde:string):void{
		this.valorBorde = borde;
		let tipo:ProductoRequest = {nombre:this.producto.coProducto.toString(),valorCara:this.valorCara,valorBorde:this.valorBorde}; 
		this.apiService.getProductoCaraBordePatron(tipo).subscribe((data)=>{
			if(data.listProducto != null && data.listProducto.length>0){
				this.producto = data.listProducto[0];   
				this.valorCara = this.producto.valorCara;
				this.valorBorde = this.producto.valorBorde;				
				let tip:ProductoRequest = {nombre:this.producto.coProducto.toString(),valorCara:null,valorBorde:null}; 
				this.cambioValoracion(tip);
				init(this.producto.imagen3d,this.producto.perspectiva,this.producto.width,this.producto.height,
					this.producto.cp_x,this.producto.cp_y,this.producto.cp_z,this.producto.ct_x,this.producto.ct_y,this.producto.ct_z,
					this.producto.hl_x,this.producto.hl_y,this.producto.hl_z);
				animate();
				
			}			
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
	agregarCarrito():void{
		let productoNuevo: ProductoCarrito = {
			coProducto: this.producto.coProducto,
			tipo:this.producto.tipoBorde,
			claseEdad:this.producto.claseEdad,
			claseUso:this.producto.claseUso,
			claseForma:this.producto.claseForma,
			claseTema:this.producto.claseTema,
			claseCategoria:this.producto.claseCategoria,
			nombre:this.producto.nombre,
			puntuacion: this.producto.puntuacion,
			voto: this.producto.voto,
			tipoCara:this.producto.tipoCara,
			subtipoCara:this.producto.subtipoCara,
			valorCara:this.producto.valorCara,
			tipoBorde:this.producto.tipoBorde,
			valorBorde:this.producto.valorBorde,
			material:this.producto.material,
			medidas:this.producto.medidas,
			peso: this.producto.peso,
			precio: this.producto.precio,
			precioMin: this.producto.precioMin,
			precioMax: this.producto.precioMax,
			precioOferta: this.producto.precioOferta,
			imagenPatronGif:this.producto.imagenPatronGif,
			imagenPatronJpg:this.producto.imagenPatronJpg,
			imagen:this.producto.imagen,
			imagen3d:this.producto.imagen3d,
			hover: null,
			coPatron: this.producto.coPatron,
			cantidad: 1,
			textoCara: this.producto.textoCara,
			textoBorde: this.producto.textoBorde,
		}
		this.listaCarrito.push(productoNuevo);
		let monto:number = 0;
		this.listaCarrito.forEach(element => {
			monto = monto + element.precio
		});
      	this.store.dispatch(action.carrito({vproductos:this.listaCarrito,vmonto:monto.toString()}));
	}
  	ngOnInit(){
		this.header = new HeaderTemplate(HeaderTemplate.RUTA+'armableS.svg','logo','"Organiza tu vida a partir de tus sueños".',' Muebles ensamblables en todas las formas que puedas imaginar. Pueden ser armados fácilmente y desarmados si necesitas transportarlos.','ARMABLES',Seccion.Tienda);
		let vsection:string = Seccion.Tienda;
    	this.store.dispatch(action.section({vsection})); 
		this.tipoSuperficie=TipoSuperficie.Laminado;
		this.tipoColor=TipoColor.Color;
		this.tipoCanto=TipoCanto.Pintado;
		this.listaSuperficie = this.listaLaminadoColor;
		this.listaCanto = this.listaCantoPintado;		
		this.coProducto = this.activatedRoute.snapshot.paramMap.get('id');

		this.carrito$ = this.storeCarrito.pipe(select('carrito'));
		this.carrito$.subscribe( res => {
			this.listaCarrito = res.productos;
		});

		let tipo:ProductoRequest = {"nombre":this.coProducto}; 
		this.apiService.getProductoCod(tipo).subscribe((data)=>{
			this.producto = data.listProducto[0];   
			this.valorCara = this.producto.valorCara;
			this.valorBorde = this.producto.valorBorde;			
			init(this.producto.imagen3d,this.producto.perspectiva,this.producto.width,this.producto.height,
				this.producto.cp_x,this.producto.cp_y,this.producto.cp_z,this.producto.ct_x,this.producto.ct_y,this.producto.ct_z,
				this.producto.hl_x,this.producto.hl_y,this.producto.hl_z);
			animate();
		});
		this.cambioValoracion(tipo); 
		this.apiService.getProductoCaraBorde(tipo).subscribe((data)=>{
			let caraBordes:Producto[] = data.listProducto;   
			caraBordes.forEach(element => {
				if(element.tipoCara=="LAMINADO" && element.subtipoCara=="COLOR" && element.tipoBorde=="PINTADO"){
					if(!this.listaLaminadoColor.includes(element.valorCara)){
						this.listaLaminadoColor.push(element.valorCara);
					}				
				}
				else if(element.tipoCara=="LAMINADO" && element.subtipoCara=="TIPO MADERA" && element.tipoBorde=="TAPACANTO"){
					if(!this.listaLaminadoMadera.includes(element.valorCara)){
						this.listaLaminadoMadera.push(element.valorCara);
					}
					if(!this.listaCantoSuperficie.includes(element.valorBorde)){
						this.listaCantoSuperficie.push(element.valorBorde);
					}					
				}
				else if(element.tipoCara=="PINTADO"){
					if(!this.listaPintadoColor.includes(element.valorCara)){
						this.listaPintadoColor.push(element.valorCara);
					}
					if(!this.listaCantoPintado.includes(element.valorBorde)){
						this.listaCantoPintado.push(element.valorBorde);
					}					
				}
				if(element.tipoBorde=="PINTADO"){
					if(!this.listaCantoPintado.includes(element.valorBorde)){
						this.listaCantoPintado.push(element.valorBorde);
					}
				}
			});
		});
  	}
	verValoracion():void{
		let t : HTMLElement = document.querySelector('#miModalValoracion');
		t.className='modal';
		t.style.opacity="1";
	}
	cerrarValoracion():void{
		let t : HTMLElement = document.querySelector('#miModalValoracion');
		t.className='hidden';
		t.style.opacity="0";
	}
}
var container: Element, controls;
var camera, scene, renderer, light;
var clock; 
var mixer;

function init(imagen,perspectiva,width,height,cp_x,cp_y,cp_z,ct_x,ct_y,ct_z,hl_x,hl_y,hl_z) {
	clock = new THREE.Clock();
	container = document.querySelector('#canva-tres');	
	container.innerHTML = '';		
	//camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 2000 );	
	//camera = new THREE.PerspectiveCamera( 50, container.clientWidth / container.clientHeight, 1, 5000 );	
	camera = new THREE.PerspectiveCamera( perspectiva, container.clientWidth / container.clientHeight, width, height );	
	//camera.position.set( 100, 200, 1100 );
	//camera.position.set( -1000, 500, 1000 );
	camera.position.set( cp_x, cp_y, cp_z );
	scene = new THREE.Scene();
	//scene.background = new THREE.Color( 0xa0a0a0 );
	scene.background = new THREE.Color( 0xffffff );

	light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	light.position.set( 0, 0, 0 );
	scene.add( light );

	light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	light.position.set( 0, 0, 0 );
	scene.add( light ); 

	light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	//light.position.set( -1, 0, 1 );
	light.position.set(hl_x,hl_y,hl_z);
	scene.add( light ); 


	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 0, 0 );		
	light.castShadow = true;
	light.shadow.camera.top = 180;
	light.shadow.camera.bottom = - 100;
	light.shadow.camera.left = - 120;
	light.shadow.camera.right = 120;		
	scene.add( light );
	/*
	var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
	mesh.rotation.x = - Math.PI / 2;
	mesh.receiveShadow = true;
	scene.add( mesh );
	*/
	/*
	var grid= new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
	var gridMaterial:any = grid.material; 
	grid.position.set(0,-150,0);
	gridMaterial.opacity = 0.2;
	gridMaterial.transparent = true;
	scene.add( grid );
	*/
	// model
	var loader = new FBXLoader();
	loader.load( imagen, function ( object:any ) {
		mixer = new THREE.AnimationMixer( object );
		/*
		var action = mixer.clipAction( object.animations[ 0 ] );
		action.play();
		object.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		} );
		*/
		scene.add( object );

	} );
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(container.clientWidth , container.clientHeight);
	renderer.gammaFactor = 2.2;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
	container.appendChild( renderer.domElement );
	controls = new OrbitControls( camera, renderer.domElement );
	//controls.target.set( 0, 100, 0 );
	controls.target.set( ct_x, ct_y, ct_z );
	controls.update();
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	camera.aspect = container.clientWidth/ container.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( container.clientWidth , container.clientHeight);
}
function animate() {
	requestAnimationFrame( animate );
	var delta = clock.getDelta();
	if ( mixer ) mixer.update( delta );
	renderer.render( scene, camera );

}