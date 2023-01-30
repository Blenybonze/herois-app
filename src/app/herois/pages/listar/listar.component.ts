import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private heroisService: HeroisService) { }

  ngOnInit(): void {
    this.heroisService.getHerois().subscribe(resp => console.log(resp))
  }
}
