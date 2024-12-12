import { Component, inject, model, OnInit} from '@angular/core';
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
  selector: 'app-password',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  constructor (private servicio:ServiceService){}
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  
  usuario={...this.data.usuario};
  erroranterior=false;  
  errornueva=false;
  errorconfirmar=false;
  anteriorcontra:string='';
  nuevacontra:string='';
  confirmacontra:string='';
  cerrar(): void {
    this.dialogRef.close();
  }

  guardar(){
    if(this.validar()){
      const nuevousuario={
        id: this.usuario.id,
        correo: this.usuario.correo,
        password: this.nuevacontra,
        nombre: this.usuario.nombre,
        avatar:this.usuario.avatar
      }
      this.servicio.updateUsuario(this.usuario.id,nuevousuario).subscribe(
      (response) => {
        this.dialogRef.close(true);
      })
    }
  }

  validar():boolean{
    this.erroranterior=false;
    this.errornueva=false;
    this.errorconfirmar=false;
    let estado = true;

    if (this.anteriorcontra.trim() === '') {
       this.erroranterior = true;
       estado = false;
    }else if(this.anteriorcontra!==this.usuario.password){
      this.erroranterior = true;
       estado = false;
    }

    if (this.nuevacontra.trim() === '') {
       this.errornueva = true;
       estado = false;
    }

    if (this.confirmacontra.trim() === '') {
       this.errorconfirmar= true;
       estado = false;
    }else if(this.confirmacontra!==this.nuevacontra){
      this.errorconfirmar= true;
       estado = false;
    }
    return estado;
  }
}
