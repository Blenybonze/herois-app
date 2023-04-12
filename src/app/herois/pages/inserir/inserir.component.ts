import { Component, OnInit } from '@angular/core';
import { Heroi, Publisher } from '../../interfaces/herois.interface';
import { HeroisService } from '../../services/herois.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {

  publicantes = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroi: Heroi = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(
    private heroisService: HeroisService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

    if (!this.router.url.includes(`editar`)) {
      return;
    } else {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroisService.getHeroiPorId(id))
        )
        .subscribe(heroi => this.heroi = heroi);
    }
  }

  salvar() {
    if (this.heroi.superhero.trim().length === 0) {
      return
    }

    //Atualizar
    if (this.heroi.id) {
      this.heroisService.PutAtualizarHeroi(this.heroi)
        .subscribe(heroi => this.exibirSnackBar('Registro atualizado'));
    } else {
      this.heroisService.PostHeroiAdd(this.heroi)
        .subscribe(heroi => {
          this.router.navigate(['/herois/editar', heroi.id])
          this.exibirSnackBar('Registro Criado');
        });
    }
  }

  deletarHeroi() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '500px',
      data: this.heroi
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroisService.DeleteHeroi(this.heroi.id!)
            .subscribe(resp => {
              this.router.navigate(['/herois/listar']);
            })
        }
      }
    )
  }

  exibirSnackBar(msgn: string) {
    this.snackBar.open(msgn, 'ok', {
      duration: 2500,
    });

  }

}
