import { Component, inject, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../servicio/service.service';

export interface DialogData {
  pelicula: any;
  name: string;
}

@Component({
  selector: 'app-eliminar',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  constructor (private servicio:ServiceService){}
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  borrar():void{
    this.servicio.deletePelicula(this.data.pelicula.id).subscribe({
      next: (response) => {
        this.dialogRef.close(true);
      },
    });
  }

  cerrar(): void {
    this.dialogRef.close(false);
  }
}
