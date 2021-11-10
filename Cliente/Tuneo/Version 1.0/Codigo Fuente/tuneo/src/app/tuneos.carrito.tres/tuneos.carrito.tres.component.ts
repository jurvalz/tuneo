import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ProductoCarrito, PagoRequest,OrdenRequest} from '../common/common.class';
import { ApiService } from '../api.service';
import { Usuario } from '../reducers/usuario.reducers';
declare var Culqi: any;
declare var culqijs: any;
@Component({
  selector: 'carrito-tres',
  templateUrl: './tuneos.carrito.tres.component.html',
  styleUrls: ['./tuneos.carrito.tres.component.scss']
})
export class TuneosCarritoTresComponent implements OnInit {
  precio:string;
  listaCarrito: ProductoCarrito[]=[];
  carrito$ : Observable<any>;
  login$ : Observable<any>;
  usuario:Usuario;
  constructor(private storeCarrito: Store<{carrito: any}>,private apiService: ApiService,private store: Store<{login: any}>) { }

  ngOnInit() {
    this.login$ = this.store.pipe(select('login'));
    this.login$.subscribe( res => {
      if(res.codigo != ''){
        this.usuario = res;
      }
      
    });
    this.carrito$ = this.storeCarrito.pipe(select('carrito'));
		this.carrito$.subscribe( res => {
      this.listaCarrito = res.productos;
      this.precio = res.monto;
		});
    

  }
  modal():void{   
    let w:HTMLInputElement = document.querySelector("input[type='radio']:checked");
    if(w.value=='culqi'){
      Culqi = new culqijs.Checkout();
      Culqi.publicKey = 'pk_test_e444ef28cd0b98b1'; 
      Culqi.options({
        lang: 'auto',
        modal: true,
        installments: true,
        style: {
          bgcolor: '#f0f0f0',
          maincolor: '#53D3CA',
          disabledcolor: '#ffffff',
          buttontext: '#ffffff',
          maintext: '#4A4A4A',
          desctext: '#4A4A4A',
          logo: 'http://encaja.noldev.com:8080/tuneo/assets/images/partes/menu/principal/logo.svg'		  
        }
      })
      let vprecio:number = parseFloat(this.precio)*100;
      let monto:string = vprecio.toString();
      let expiracion:number = Math.round((new Date()).getTime() / 1000)+60*60*24;
      let orden:OrdenRequest = {
        amount:vprecio,
        currency_code:'PEN',
        description: 'Compra Tuneo', 
        order_number: null,      
        client_details:{
          first_name: this.usuario.nombre,
          last_name: this.usuario.apellido,
          email: this.usuario.correo,
          phone_number: this.usuario.telefono
        },
        expiration_date:expiracion,
        confirm:false
      };
      this.apiService.getOrden(orden).subscribe(res => {
        Culqi.settings({
          title: 'Tuneo',
          currency: 'PEN',
          description: 'Tienda',
          amount: monto,
          order: res.orden
        }); 
        Culqi.open();
      });
    }
    else if(w.value=='deposito'){
      let t : HTMLElement = document.querySelector('#miModalPago');
      t.className='modal';
      t.style.opacity='1';
    }
  }

  pagar():void {
    
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
      var token = Culqi.token.id;
      let vprecio:number = parseFloat(this.precio)*100;
      let monto:string = vprecio.toString();
      let pago:PagoRequest={
        monto: monto,
        moneda: 'PEN',
        correo: this.usuario.correo,
        token: token
      }
      this.apiService.getPago(pago).subscribe(resp =>{
        if(resp.operacion=="00"){
          Culqi.close();
        }
      });
    }  else if (Culqi.order) { 
      console.log("Order confirmada");
      console.log(Culqi.order); 
    }     
    
  };
  cerrarPagoModal():void{
    let t : HTMLElement = document.querySelector('#miModalPago');
		t.className='hidden';
		t.style.opacity="0";
  }
}

