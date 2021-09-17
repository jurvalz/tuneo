import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import {HeaderTemplate,UsuarioLoginRequest,RegistroRequest} from '../common/common.class';
import {ApiService} from './../api.service';
import { Observable } from 'rxjs';
import {Store, select} from '@ngrx/store';
import * as action from './../actions/usuario.actions';

@Component({
  selector: 'tuheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy   {
  @Input()
  header:HeaderTemplate;
  access:boolean;
  nombre:string;
  tusuario:string="";
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
  cantidadCarrito: number = 0;
  login$ : Observable<any>;
  carrito$ : Observable<any>;
  constructor(private apiService: ApiService,private store: Store<{login: any}>,private storeCarrito: Store<{carrito: any}>){
    this.access = false;
  }

  ngOnInit(){
    this.access = false;
    this.login$ = this.store.pipe(select('login'));
    this.login$.subscribe( res => {
      if(res.codigo != ''){
        this.access = true;
        this.nombre = res.codigo;
      }

    });
    this.carrito$ = this.storeCarrito.pipe(select('carrito'));
		this.carrito$.subscribe( res => {
      this.cantidadCarrito = res.productos.length;
		});
  }
  ingresar():void{
    let t : HTMLElement = document.querySelector('#miModal');
		t.className='modal';
		t.style.opacity='1';
    let el1:HTMLAnchorElement = document.querySelector('#tusuario');
    el1.focus();
  }
  registrar():void{
    let t : HTMLElement = document.querySelector('#miModalRegistro');
		t.className='modal';
		t.style.opacity='1';
    let el1:HTMLAnchorElement = document.querySelector('#nusuario');
    el1.focus();
  }
  login():void{
    let usuario: UsuarioLoginRequest = {
      coUsuario: this.tusuario,
	    credencial: this.tcredencial
    };

    this.apiService.login(usuario).subscribe((data)=>{
      this.access = true;
      this.nombre = data.coUsuario;
      let vcodigo: string = data.coUsuario;
      let vcorreo:string = data.correo;
      let vnombre:string = data.nombres;
      let vapellido:string = data.apellidos;
      let vtelefono:string = data.telefono;
      this.store.dispatch(action.login({vcodigo,vcorreo,vnombre,vapellido,vtelefono}));
      /*
      this.login$ = this.store.pipe(select('login'));
      this.login$.subscribe( res => {
        if(res.codigo != ''){
          this.access = true;
          this.nombre = res.codigo;
        }
      });*/
      let el:HTMLAnchorElement = document.querySelector('#closeModalLogin');
      el.click();


    });
  }
  cerrarLogin():void{
    let t : HTMLElement = document.querySelector('#miModal');
		t.className='hidden';
		t.style.opacity="0";
  }
  cerrarRegistro():void{
    let t : HTMLElement = document.querySelector('#miModalRegistro');
		t.className='hidden';
		t.style.opacity="0";
  }
  guardar():void{

    this.nusuario.credencial = this.tcredencial;
    this.apiService.registrar(this.nusuario).subscribe((data)=>{
      this.access = true;
      this.nombre = this.nusuario.coUsuario;
      let vcodigo: string = this.nusuario.coUsuario;
      let vcorreo:string = this.nusuario.correo;
      let vnombre:string = this.nusuario.nombres;
      let vapellido:string = this.nusuario.apellidos;
      let vtelefono:string = this.nusuario.telefono;
      this.store.dispatch(action.login({vcodigo,vcorreo,vnombre,vapellido,vtelefono}));
      /*
      this.login$ = this.store.pipe(select('login'));
      this.login$.subscribe( res => {
        if(res.codigo != ''){
          this.access = true;
          this.nombre = res.codigo;
        }
      });
      */
      let el:HTMLAnchorElement = document.querySelector('#closeModalRegistro');
      el.click();


    });
  }
  ngOnDestroy() {
  }
  salir():void{
    this.access = false;
    this.nusuario = {
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
    }
  }
  carrito():void{
    /*
    if(!this.access){
      this.ingresar();
    }
    else{
      */
      let carrito: HTMLElement =document.querySelector('#carrito');
      carrito.click();
    //}
  }
  aceptarTerminosCondiciones():void{
    let t : HTMLElement = document.querySelector('#miModalTerminosCondiciones');
		t.className='modal';
    t.style.opacity='1';
    let el1:HTMLAnchorElement = document.querySelector('#detalleTermino');
    el1.focus();
  }
  cerrrarTerminosCondiciones():void{
    let t : HTMLElement = document.querySelector('#miModalTerminosCondiciones');
		t.className='hidden';
		t.style.opacity="0";
  }
}
