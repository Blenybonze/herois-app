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

  constructor(private heroisService: HeroisService) { }

  buscando() {
    this.heroisService.getHerois()
      .subscribe(herois => this.herois = herois);
  }
}
