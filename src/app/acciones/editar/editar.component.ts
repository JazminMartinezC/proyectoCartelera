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
  selector: 'app-editar',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  constructor (private servicio:ServiceService){}
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly pelicula = model(this.data.pelicula);


  peli={...this.data.pelicula};
  errorTitulo=false;  
  errorFecha=false;
  errorGeneros=false;
  errorDescripcion=false;
  errorUrl=false;

  cerrar(): void {
    this.dialogRef.close();
  }

  guardar(){
    if(this.validar()){
      const nuevapeli={
        id: this.peli.id,
        nombre: this.peli.nombre,
        descripcion: this.peli.descripcion,
        anio_filmacion: this.peli.anio_filmacion,
        poster:this.peli.poster,
        genero_principal:this.peli.genero_principal
      }
      this.servicio.updatePelicula(this.peli.id,nuevapeli).subscribe(
      (response) => {
        this.dialogRef.close(true);
      })
    }
  }

  validar():boolean{
    this.errorTitulo=false;
    this.errorFecha=false;
    this.errorGeneros=false;
    this.errorDescripcion=false;
    this.errorUrl=false;
    let estado = true;

    if (this.peli.nombre.trim() === '') {
      this.errorTitulo = true;
      estado = false;
    }
    if (this.peli.anio_filmacion.trim() === '') {
      this.errorFecha = true;
      estado = false;
    }
    if (this.peli.genero_principal.trim() === '') {
      this.errorGeneros = true;
      estado = false;
    }
    if (this.peli.descripcion.trim() === '') {
      this.errorDescripcion = true;
      estado = false;
    }
    if (this.peli.poster.trim() === '') {
      this.errorUrl = true;
      estado = false;
    }
    return estado;
  }
}
