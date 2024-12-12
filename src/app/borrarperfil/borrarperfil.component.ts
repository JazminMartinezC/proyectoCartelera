import { Component, inject, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../servicio/service.service';

export interface DialogData {
  usuario: any;
  name: string;
}

@Component({
  selector: 'app-borrarperfil',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './borrarperfil.component.html',
  styleUrl: './borrarperfil.component.css'
})
export class BorrarperfilComponent {
  constructor (private servicio:ServiceService){}
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  contra:string='';
  errcontra=false;

  validar():boolean{
    this.errcontra=false;
    let estado = true;

    if (this.contra.trim() === '') {
       this.errcontra = true;
       estado = false;
    }else if(this.contra!==this.data.usuario.password){
      this.errcontra= true;
       estado = false;
    }
    return estado;
  }

  borrar():void{
    if(this.validar()){
      this.servicio.deleteUsuario(this.data.usuario.id).subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
      });
    }
  }

  cerrar(): void {
    this.dialogRef.close(false);
  }

}
