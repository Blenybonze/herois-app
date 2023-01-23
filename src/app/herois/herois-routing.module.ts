import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { InserirComponent } from './pages/inserir/inserir.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listar', component: ListarComponent },
      { path: 'inserir', component: InserirComponent },
      { path: 'editar/:id', component: InserirComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: HeroiComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'listar' }
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroisRoutingModule { }
