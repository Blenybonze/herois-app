import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroisRoutingModule } from './herois-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { InserirComponent } from './pages/inserir/inserir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeroiTarjetaComponent } from './components/heroi-tarjeta/heroi-tarjeta.component';
import { ImagemPipe } from './pipes/imagem.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    InserirComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListarComponent,
    HeroiTarjetaComponent,

    //pipes
    ImagemPipe,
      ConfirmarComponent
  ],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class HeroisModule { }
