import { Component, OnInit } from '@angular/core';
import {Encuesta, ProductoCarrito, RegistroRequest, UsuarioLoginRequest} from "./../common/common.class";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApiService } from '../api.service';
import * as action from './../actions/usuario.actions';

@Component({
  selector: 'carrito',
  templateUrl: './tuneos.carrito.component.html',
  styleUrls: ['./tuneos.carrito.component.scss']
})
export class TuneosCarritoComponent implements OnInit {
  paso:number;
  encuesta:Encuesta;
  mensajeError : string = null;
  fecha:string;
  precio:number;
  listaCarrito: ProductoCarrito[]=[];
  carrito$ : Observable<any>;
  descuento:number;
  total:number;
  tcredencial:string="";
  rcredencial:string="";
  nusuario:RegistroRequest = {
    coUsuario:"",
    nombres:"",
    apellidos:"",
    correo:"",
    credencial:"",
    edad:null,
    direccion:"",
    codPostal:"",
    dni:"",
    telefono:""
  };
  constructor(private storeCarrito: Store<{carrito: any}>,private apiService: ApiService,private store: Store<{login: any}>) { }

  ngOnInit() {
    this.carrito$ = this.storeCarrito.pipe(select('carrito'));
		this.carrito$.subscribe( res => {
      this.listaCarrito = res.productos;
      this.precio = 0;
      this.listaCarrito.forEach(element => {
        this.precio = this.precio + element.precioOferta;
      });
      this.descuento = 0;
      this.total = this.precio - this.descuento;
		});
    let hoy : Date = new Date()
    this.fecha = (hoy.getDate()>9 ? hoy.getDate() : "0"+hoy.getDate())+"/"+ (hoy.getMonth()+1>9?hoy.getMonth()+1:"0"+(hoy.getMonth()+1))+ "/"+ hoy.getFullYear().toString().substr(2,2);
    this.paso=1;
    this.encuesta = {
      uno:null,
      dos:null,
      tres:null,
      cuatro:null,
      cinco:{
          dormitorio:null,
          comedor: null,
          cocina:null,
          sala:null,
          otro:null,
          texto:null,
          sinproblema:null   
      },
      seis:null,
      siete:{
          costo:null,
          calidad:null,
          bonito:null,
          combina:null,
          espacio:null,
          garantia:null
      }
    };
  }
  public isPaso(v:number):boolean{
    return this.paso == v;
  }
  ingresarEncuesta():void{
    this.encuesta = {
      uno:null,
      dos:null,
      tres:null,
      cuatro:null,
      cinco:{
          dormitorio:null,
          comedor: null,
          cocina:null,
          sala:null,
          otro:null,
          texto:null,
          sinproblema:null   
      },
      seis:null,
      siete:{
          costo:null,
          calidad:null,
          bonito:null,
          combina:null,
          espacio:null,
          garantia:null
      }
    };
    let t : HTMLElement = document.querySelector('#miModalEncuesta');
		t.className='modal';
    t.style.opacity='1';
    document.getElementById('textPregunta1').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta2').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta3').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta4').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta5').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta6').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta7').className="SansProRegular bold pregunta";
  }
  cerrarModalEncuesta():void{
    let t : HTMLElement = document.querySelector('#miModalEncuesta');
		t.className='hidden';
		t.style.opacity="0";
  }
  ingresarMensajeModal(form: NgForm):void{    
    document.getElementById('textPregunta1').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta2').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta3').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta4').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta5').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta6').className="SansProRegular bold pregunta";
    document.getElementById('textPregunta7').className="SansProRegular bold pregunta";
    if(this.validarEncuesta(form)){
      this.cerrarModalEncuesta();
      let t : HTMLElement = document.querySelector('#miModalEncuestaMsj');
      t.className='modal';
      t.style.opacity='1';
    }
    
  }
  cerrarMensajeModal():void{
    let t : HTMLElement = document.querySelector('#miModalEncuestaMsj');
		t.className='hidden';
		t.style.opacity="0";
  }
  validarEncuesta(form: NgForm):boolean{
    let correcto = true;
    let foco:HTMLInputElement=null; 
    let mensaje = "Error en la respuesta de ";
    let singular = "la pregunta ";
    let plural = "las preguntas ";
    let preguntasTexto = "";
    let ecantidad=0;
    this.mensajeError  = null;
    //if((document.querySelector('#ipreg3') as HTMLInputElement).value.trim()==""){
    if(form.value.pregunta1.trim()==""){
      correcto = false;
      preguntasTexto = preguntasTexto+ " 1";
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta1').className="SansProRegular bold pregunta error";
    }
    if(form.value.pregunta2.trim()==""){
      correcto = false;
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 2";
      }
      else{
        preguntasTexto = preguntasTexto+ " 2";
      }
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta2').className="SansProRegular bold error";
    }

    if(form.value.pregunta3.trim()==""){
      let a : HTMLInputElement = document.querySelector('#ipreg3');
      foco = a;
      correcto = false;
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 3";
      }
      else{
        preguntasTexto = preguntasTexto+ " 3";
      }
      
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta3').className="SansProRegular bold pregunta error";
    }

    if(form.value.pregunta4.trim()==""){
      correcto = false;
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 4";
      }
      else{
        preguntasTexto = preguntasTexto+ " 4";
      }
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta4').className="SansProRegular bold error";
    }

    if( (form.value.pregunta5Dormitorio!=true && form.value.pregunta5Comedor!=true && form.value.pregunta5Cocina!=true && 
    form.value.pregunta5Sala!=true && form.value.pregunta5Otro!=true && form.value.pregunta5Sin!=true) || (form.value.pregunta5Otro==true && form.value.pregunta5Texto.trim()=="")){
      correcto = false;
      if(form.value.pregunta5Otro==true && form.value.pregunta5Texto.trim()==""){
        let a : HTMLInputElement = document.querySelector('#textoOtro');
        if(foco == null){
          foco = a;
        }        
      }
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 5";
      }
      else{
        preguntasTexto = preguntasTexto+ " 5";
      }
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta5').className="SansProRegular bold pregunta error";
    }
    /*
    let pregunta5: any = document.querySelectorAll('.pregunta5');

    for (let index = 0; index < pregunta5.length; index++) {
      if(pregunta5[index].checked){
        correcto = true;
      }      
    }
    if(!correcto){
      (pregunta5[0] as HTMLInputElement).focus();
      return false;
    }
    */

    if(form.value.pregunta6.trim()==""){
      correcto = false;
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 6";
      }
      else{
        preguntasTexto = preguntasTexto+ " 6";
      }
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta6').className="SansProRegular bold pregunta error";
    }

    let pregunta7: any = document.querySelectorAll('.num');
    let numeros:string[]=[];
    let error7 = false;
    for (let index = 0; index < pregunta7.length; index++) {
      if(pregunta7[index].value.trim==""){
        let a : HTMLInputElement = pregunta7[index];
        if(foco == null){
          foco = a;
        }    
        correcto = false;
        error7 = true;        
      } 
      else{
        numeros.push(pregunta7[index].value);
      }     
    }
    for (let index = 1; index < 7; index++) {
      if(!numeros.includes(index.toString())){
        let a : HTMLInputElement = pregunta7[0];
        if(foco == null){
          foco = a;
        } 
        correcto = false;   
        error7 = true;     
      }      
    }
    if(error7){
      if(ecantidad>0){
        preguntasTexto = preguntasTexto+ ", 7";
      }
      else{
        preguntasTexto = preguntasTexto+ " 7";
      }
      ecantidad = ecantidad + 1;
      document.getElementById('textPregunta7').className="SansProRegular bold pregunta error";
    }
    if(foco != null){
      foco.focus();
    } 
    if(!correcto){
      this.mensajeError = mensaje + (ecantidad>0?plural:singular)+preguntasTexto;
    }
    
    return correcto;
  }
  siguiente():void{
    if(this.paso==1){
      let t : HTMLElement = document.querySelector('#miModalPaso');
      t.className='modal';
      t.style.opacity="1";
    }
    else if(this.paso==3){
      let elemento:HTMLButtonElement =document.querySelector('#miBoton');
      elemento.click();
    }
    else{
      this.paso =  this.paso + 1;
    }    
  }
  anterior():void{
    this.paso =  this.paso - 1;
  }
  verModalRegistro():void{
    let t : HTMLElement = document.querySelector('#miModalPaso');
    t.className='hidden';
		t.style.opacity="0";
    t= document.querySelector('#miModalRegistrot');
    t.className='modal';
    t.style.opacity='1';
  }
  loginPanel():void{
    let t : HTMLElement = document.querySelector('#miModalPaso');
    t.className='hidden';
		t.style.opacity="0";
    t= document.querySelector('#miModalUser');
    t.className='modal';
    t.style.opacity='1';
  }
  cerrarRegistroModal():void{
    let t : HTMLElement = document.querySelector('#miModalRegistrot');
    t.className='hidden';
		t.style.opacity="0";
    t= document.querySelector('#miModalPaso');
    t.className='modal';
    t.style.opacity='1';
  }
  guardar():void{    
    this.apiService.registrar(this.nusuario).subscribe((data)=>{
      let vcodigo: string = this.nusuario.coUsuario;
      let vcorreo:string = this.nusuario.correo;
      let vnombre:string = this.nusuario.nombres;
      let vapellido:string = this.nusuario.apellidos;
      let vtelefono:string = this.nusuario.telefono;
      this.store.dispatch(action.login({vcodigo,vcorreo,vnombre,vapellido,vtelefono}));      
      let t : HTMLElement = document.querySelector('#miModalRegistrot');
      t.className='hidden';
		  t.style.opacity="0";
      this.paso =  this.paso + 1;
    });    
  }
  invitar():void{
    let t : HTMLElement = document.querySelector('#miModalPaso');
    t.className='hidden';
    t.style.opacity="0";
    this.paso =  this.paso + 1;
  }
  login():void{
    console.log('login');
    let usuario: UsuarioLoginRequest = {
      coUsuario: this.nusuario.coUsuario,
	    credencial: this.tcredencial
    };
    
    this.apiService.login(usuario).subscribe((data)=>{
      console.log('login service');
      let vcodigo: string = data.coUsuario;
      let vcorreo:string = data.correo;
      let vnombre:string = data.nombres;
      let vapellido:string = data.apellidos;
      let vtelefono:string = data.telefono;
      this.store.dispatch(action.login({vcodigo,vcorreo,vnombre,vapellido,vtelefono}));
      let t : HTMLElement = document.querySelector('#miModalUser');
      t.className='hidden';
      t.style.opacity="0";
      this.paso =  this.paso + 1;
      
    });    
  }
}
