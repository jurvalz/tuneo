import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MensajeResponse} from '../common/common.class';
import {ApiService} from './../api.service';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'mensajes',
  templateUrl: './tuneos.mensajes.component.html',
  styleUrls: ['./tuneos.mensajes.component.scss']
})
export class TuneosMensajesComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;
  mensajes: MensajeResponse;
  login$ : Observable<any>;
  constructor(private apiService: ApiService,private store: Store<{login: any}>){
    
  }

  ngOnInit() {
    this.login$ = this.store.pipe(select('login'));
    this.login$.subscribe( res => {
        let usuario = {
          coUsuario: res.codigo,
          an: null,
	        mje: null
        }
        this.apiService.mensajes(usuario).subscribe((data)=>{
          this.mensajes = data;      
        });
      }
    );
    
    
  }

}
