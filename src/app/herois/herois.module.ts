import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirComponent } from './pages/inserir/inserir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';



@NgModule({
  declarations: [
    InserirComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroisModule { }