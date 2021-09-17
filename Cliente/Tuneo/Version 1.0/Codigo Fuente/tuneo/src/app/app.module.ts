import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DockComponent } from './dock/dock.component';
import { DockContactoComponent } from './dock-contacto/dock-contacto.component';
import { ArmableComponent } from './armable/armable.component';
import { ArmableSeleccionComponent } from './armable.seleccion/armable.seleccion.component';
import { ModularComponent } from './modular/modular.component';
import { UsoComponent } from './uso/uso.component';
import { PremiumComponent } from './premium/premium.component';
import { TalladoComponent } from './tallado/tallado.component';
import { TuneosComponent } from './tuneos/tuneos.component';
import { TuneosOpcionesComponent } from './tuneos.opciones/tuneos.opciones.component';
import { TuneosAjustesComponent } from './tuneos.ajustes/tuneos.ajustes.component';
import { TuneosCarritoComponent } from './tuneos.carrito/tuneos.carrito.component';
import { TuneosCuponesComponent } from './tuneos.cupones/tuneos.cupones.component';
import { TuneosFavoritosComponent } from './tuneos.favoritos/tuneos.favoritos.component';
import { TuneosMensajesComponent } from './tuneos.mensajes/tuneos.mensajes.component';
import { TuneosSeguimientoComponent } from './tuneos.seguimiento/tuneos.seguimiento.component';
import { TuneosCarritoUnoComponent } from './tuneos.carrito.uno/tuneos.carrito.uno.component';
import { TuneosCarritoDosComponent } from './tuneos.carrito.dos/tuneos.carrito.dos.component';
import { TuneosCarritoTresComponent } from './tuneos.carrito.tres/tuneos.carrito.tres.component';
import { TalladoSeleccionComponent} from './tallado-seleccion/tallado.seleccion.component';
import { GrillaProductoComponent } from './grilla-producto/grilla-producto.component';
import { PremiumSeleccionComponent } from './premium-seleccion/premium-seleccion.component';
import { ArqComponent } from './arq/arq.component';
import { ResidencialComponent } from './residencial/residencial.component';
import { ComercialComponent } from './comercial/comercial.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer,sectionReducer, carritoReducer, armablesReducer, talladosReducer, premiumReducer, modularesReducer } from './reducers/usuario.reducers';
import { GrillaTalladoComponent } from './grilla-tallado/grilla-tallado.component';
import { GrillaPremiumComponent } from './grilla-premium/grilla-premium.component';
import { GrillaModularComponent } from './grilla-modular/grilla-modular.component';
import { ModularSeleccionComponent } from './modular-seleccion/modular-seleccion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DockComponent,
    DockContactoComponent,
    ArmableComponent,
    ArmableSeleccionComponent,
    ModularComponent,
    UsoComponent,
    PremiumComponent,
    TalladoComponent,
    TuneosComponent,
    TuneosOpcionesComponent,
    TuneosAjustesComponent,
    TuneosCarritoComponent,
    TuneosCuponesComponent,
    TuneosFavoritosComponent,
    TuneosMensajesComponent,
    TuneosSeguimientoComponent,
    TuneosCarritoUnoComponent,
    TuneosCarritoDosComponent,
    TuneosCarritoTresComponent,
    TalladoSeleccionComponent,
    GrillaProductoComponent,
    PremiumSeleccionComponent,
    ArqComponent,
    ResidencialComponent,
    ComercialComponent,
    InstitucionalComponent,
    GrillaTalladoComponent,
    GrillaPremiumComponent,
    GrillaModularComponent,
    ModularSeleccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({login: loginReducer,section:sectionReducer,carrito:carritoReducer,armables:armablesReducer,tallados:talladosReducer,premium:premiumReducer,modulares:modularesReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
