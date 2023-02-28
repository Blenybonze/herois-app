import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroi } from '../../interfaces/herois.interface';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {

  heroi!: Heroi;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroisService: HeroisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroisService.getHeroiPorId(id))
      )
      .subscribe(heroi => this.heroi = heroi)
  }
}
