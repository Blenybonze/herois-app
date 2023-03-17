import { Component } from '@angular/core';
import { Heroi } from '../../interfaces/herois.interface';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  terminalBusca: string = '';
  herois: Heroi[] = [];
  heroiSelecionado!: Heroi;

  constructor(private heroisService: HeroisService) { }

  buscando() {
    this.herois = [];
    this.heroisService.getAutoComplete(this.terminalBusca)
      .subscribe(herois => {
        console.log(herois)
        this.herois = herois;
      })
  }

  selecionaHeroi(heroiSelecionado: Heroi) {
    this.terminalBusca = heroiSelecionado.superhero;

    this.heroisService.getHeroiPorId(heroiSelecionado.id!)
      .subscribe(heroi => this.heroiSelecionado = heroi)
  }

}
