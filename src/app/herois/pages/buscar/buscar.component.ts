import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
        this.herois = herois;
      })
  }

}
