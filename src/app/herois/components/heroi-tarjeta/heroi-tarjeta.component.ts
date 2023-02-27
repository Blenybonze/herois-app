import { Component, Input } from '@angular/core';
import { Heroi } from '../../interfaces/herois.interface';

@Component({
  selector: 'app-heroi-tarjeta',
  templateUrl: './heroi-tarjeta.component.html',
  styleUrls: ['./heroi-tarjeta.component.css']
})
export class HeroiTarjetaComponent {
  @Input() heroi!: Heroi;
}
