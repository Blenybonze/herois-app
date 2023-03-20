import { Heroi } from '../../interfaces/herois.interface';
import { HeroisService } from '../../services/herois.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})

export class BuscarComponent implements OnInit {

  terminal: string = '';
  herois: Heroi[] = [];
  heroiSelecionado: Heroi | undefined;

  constructor(private heroesService: HeroisService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getAutoComplete(this.terminal.trim())
      .subscribe(heroes => this.herois = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroiSelecionado = undefined;
      return;
    }

    const heroe: Heroi = event.option.value;
    this.terminal = heroe.superhero;

    this.heroesService.getHeroiPorId(heroe.id!)
      .subscribe(heroe => this.heroiSelecionado = heroe);
  }

}
