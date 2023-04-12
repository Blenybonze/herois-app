import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroi } from '../../interfaces/herois.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {



  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroi
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  deletar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
