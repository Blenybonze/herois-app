import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../../services/herois.service';
import { Heroi } from '../../interfaces/herois.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  herois: Heroi[] = []
  constructor(private heroisService: HeroisService) { }


  ngOnInit(): void {
    this.heroisService.getHerois().subscribe(resp => {
      this.herois = resp
    })
  }
}
