export class HeaderTemplate{
    imagen:string;
    clase:string;
    frase1:string;
    frase2:string;
    titulo:string;
    seccion:string;
    public static RUTA:string='assets/images/partes/menu/principal/'; 
    constructor(imagen:string, clase:string, frase1:string, frase2:string, titulo:string,seccion:string){
        this.imagen= imagen;
        this.clase= clase;
        this.frase1= frase1;
        this.frase2= frase2;
        this.titulo= titulo;
        this.seccion=seccion;
    }
}
export class GrillaProductoTemplate{
    productos:Producto[];
    patrones: Patron[];
    constructor(productos:Producto[],patrones:Patron[]){
        this.productos = productos;
        this.patrones = patrones;
    }
}
export enum TuneosOpcionesEnum {
    mensajes = 1,
    carrito = 2,
    seguimiento = 3,
    favoritos = 4,
    cupones =5
}
export enum Seccion{
    Tienda="T",
    Arquitectura="A"
}

export interface UsuarioLoginRequest{
    coUsuario: string,
    credencial: string
}
export interface UsuarioLoginReponse{
    coUsuario: string,
    credencial: string,
    correo: string,
    telefono: string,
    nombres: string,
    apellidos: string
}
export interface MensajeRequest{
    coUsuario: string,
    an: string,
	mje: string
}
export interface Mensaje{
    coMensaje: number
    asunto: string,
    cuerpo: string,
    fecha: string
}
export interface MensajeResponse{
    ok: boolean,
    listMensaje: Mensaje[]
}
export interface RegistroRequest{
    coUsuario:string,
    nombres:string,
    apellidos: string,
    correo:string,
    credencial:string,
    edad:number,
    direccion:string,
    codPostal:string,
    dni:string,
    telefono:string
}
export interface RegistroResponse{
    codError: string
}

export interface Producto{
    coProducto: number,
    tipo:string,
    claseEdad:string,
    claseUso:string,
    claseForma:string,
    claseTema:string,
    claseCategoria:string,
    nombre:string,
    puntuacion: number,
    voto: number,
    tipoCara:string,
    subtipoCara:string,
    valorCara:string,
    tipoBorde:string,
    valorBorde:string,
    material:string,
    medidas:string,
    peso: number,
    precio: number,
    precioMin: number,
    precioMax: number,
    precioOferta: number,
    imagenPatronGif:string,
    imagenPatronJpg:string,
    imagen:string,
    imagen3d:string,
    hover: boolean,
    coPatron?: number,
    textoCara?: string,
    textoBorde?: string,
    cp_x?: number,
    cp_y?: number,
    cp_z?: number,
    ct_x?: number,
    ct_y?: number,
    ct_z?: number,
    hl_x?: number,
    hl_y?: number,
    hl_z?: number,
    perspectiva?: number,
    width?: number,
    height?: number,
    tiempoEntrega?: string
}
export interface ProductoRequest{
    nombre: string,
    valorCara?: string,
    valorBorde?: string
}
export interface ProductoResponse{
    listProducto: Producto[]
}
export interface Presentacion{
    imagen: string,
    orden: number,
    principal: boolean
}
export interface Proyecto{
    coProyecto: string,
    nombre: string,
    imagen: string,
    lista: Presentacion[]
}
export interface PresentacionRequest{
    coTipoProyecto: string
}

export interface PresentacionResponse{
    lista: Proyecto[]
}
export interface PresentacionProductoResponse{
    lista: Presentacion[]
}
export interface Patron{
    imagenPatronGif: string,
	imagenPatronJpg: string,
    coProducto: number,
    nombre: string,
	precioEntre: string,
    senal: string,
    caracteristicas: string,
}
export interface PatronResponse{
    lista: Patron[]
}
export interface Valoracion{
    coProducto:number,
	estrella5:number,
	estrella4:number,
	estrella3:number,
	estrella2:number,
	estrella1:number
}
export interface ProductoCarrito extends Producto{
    cantidad:number
}
export interface Carrito{
    productos: ProductoCarrito[],
    monto: string
}
export interface Encuesta{
    uno:string,
    dos:string,
    tres:string,
    cuatro:string,
    cinco:{
        dormitorio:boolean,
        comedor: boolean,
        cocina:boolean,
        sala:boolean,
        otro:boolean,
        texto:string,
        sinproblema:boolean   
    },
    seis:string,
    siete:{
        costo:string,
        calidad:string,
        bonito:string,
        combina:string,
        espacio:string,
        garantia:string
    }
}
export interface PagoRequest{
    monto:string,
	moneda:string,
	correo:string,
	token:string
}
export interface PagoResponse{
    operacion:string
}
export interface ClienteDetalle{
    first_name:string; 
	last_name:string; 
	email:string; 
	phone_number:string;
}
export interface OrdenRequest{
    amount:number,
	currency_code:string,
	description: string,
	order_number: string, 
	expiration_date:number,
    client_details:ClienteDetalle,
    confirm: boolean
}
export interface OrdenResponse{
    operacion:string,
	orden:string
}
export interface TalladosOpcion{
    material:string,
    medida:string,
    acabado:string
}