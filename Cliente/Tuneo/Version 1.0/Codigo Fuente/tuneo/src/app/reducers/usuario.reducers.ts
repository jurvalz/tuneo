import {createReducer, on} from '@ngrx/store';
import * as states from './../actions/usuario.actions';
import { Seccion, Carrito, PatronResponse } from '../common/common.class';

export interface Usuario{
    codigo: string,
    correo:string ,
    nombre: string,
    apellido: string,
    telefono: string
}
export const initial:Usuario = {codigo: "",correo:"",nombre: "",apellido: "",telefono:""};

const _loginReducer = createReducer(
    initial, 
    on(states.login,(state,{vcodigo,vcorreo,vnombre,vapellido,vtelefono}) => ( {codigo: vcodigo, correo: vcorreo,nombre: vnombre,apellido: vapellido,telefono:vtelefono}))
);

export function loginReducer(state: Usuario,action){
    return _loginReducer(state,action);
}

export interface SectionFooter{
    section: string  
}
export const initialSeccion:SectionFooter = {section: Seccion.Arquitectura};

const _sectionReducer = createReducer(
    initialSeccion, 
    on(states.section,(state,{vsection}) => ( {section: vsection}))
);

export function sectionReducer(state: SectionFooter,action){
    return _sectionReducer(state,action);
}


export const initialCarrito:Carrito = {productos:[],monto:""};

const _carritoReducer = createReducer(
    initialCarrito, 
    on(states.carrito,(state,{vproductos,vmonto}) => ( {productos: vproductos,monto:vmonto}))
);

export function carritoReducer(state: Carrito,action){
    return _carritoReducer(state,action);
}

export const initialArmables:PatronResponse = {lista:[]};

const _armablesReducer = createReducer(
    initialArmables, 
    on(states.armables,(state,{vpatrones}) => ( {lista: vpatrones}))
);

export function armablesReducer(state: PatronResponse,action){
    return _armablesReducer(state,action);
}

export const initialTallados:PatronResponse = {lista:[]};

const _talladosReducer = createReducer(
    initialTallados, 
    on(states.tallados,(state,{vpatrones}) => ( {lista: vpatrones}))
);

export function talladosReducer(state: PatronResponse,action){
    return _talladosReducer(state,action);
}

export const initialPremium:PatronResponse = {lista:[]};

const _premiumReducer = createReducer(
    initialPremium, 
    on(states.premium,(state,{vpatrones}) => ( {lista: vpatrones}))
);

export function premiumReducer(state: PatronResponse,action){
    return _premiumReducer(state,action);
}

export const initialModulares:PatronResponse = {lista:[]};

const _modularesReducer = createReducer(
    initialModulares, 
    on(states.modulares,(state,{vpatrones}) => ( {lista: vpatrones}))
);

export function modularesReducer(state: PatronResponse,action){
    return _modularesReducer(state,action);
}