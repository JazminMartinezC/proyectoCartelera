import { Component, inject, model, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../servicio/service.service';

export interface DialogData {
  id: any;
  name: string;
}

@Component({
  selector: 'app-ver',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})
export class VerComponent implements OnInit{

  constructor (private servicio:ServiceService){}
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly pelicula = model(this.data.id);
  peli:any=[];

  ngOnInit(): void {
    this.servicio.getPeliculaId(this.data.id).subscribe((data)=>{
      this.peli=data;
    })
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
