import { Component } from '@angular/core';
import { OnInit,ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ServiceService } from '../servicio/service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MiPerfilComponent } from '../acciones/mi-perfil/mi-perfil.component';
import { PasswordComponent } from '../password/password.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { BorrarperfilComponent } from '../borrarperfil/borrarperfil.component';

@Component({
  selector: 'app-editarperf',
  imports: [MatTableModule,MatFormFieldModule,FormsModule,CommonModule,
    MatInputModule,MatMenuModule,NgIf,MatSidenavModule , MatButtonModule,MatCardModule],
  standalone:true,
  templateUrl: './editarperf.component.html',
  styleUrl: './editarperf.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditarperfComponent implements OnInit {

  constructor(private servicio: ServiceService, private router: Router) {}

  usuario:any=[];
  us:any=[];
  dashboardOpen = true;
  errornombre=false;
  erroravatar=false;
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    let temporal=this.servicio.getItem('usuario');;
    this.usuario = temporal ? JSON.parse(temporal) : [];
    if (!this.usuario) {
      this.router.navigate(['/login']);
    }
    this.us={...this.usuario};
  }

  guardar(){
    if(this.validar()){
      const nuevousuario={
        id: this.us.id,
        correo:this.us.correo,
        password: this.us.password,
        nombre: this.us.nombre,
        avatar: this.us.avatar
      }
      this.servicio.updateUsuario(this.us.id,nuevousuario).subscribe(
        (data)=>{
          this.servicio.deleteItem('usuario');
          this.servicio.setItem('usuario',JSON.stringify(this.us));
          window.location.reload();
        })
    }
  }

  cambiar(){
    const dialogRef=this.dialog.open(PasswordComponent,{
      data:{name: 'Cambio de contraseña', usuario: this.usuario}
    })
  }
  cancelar(){
    this.router.navigate(['/home']);
  }

  miPerfil(){
    const dialogRef = this.dialog.open(MiPerfilComponent, {
      data: {name: 'Información de usuario', usuario: this.usuario},
    });
  }

  salir(): void {
    this.servicio.deleteItem('usuario');
    this.router.navigate(['/login']);
  }

  home():void{
    this.router.navigate(['/home']);
  }

  addpeli():void{
    this.router.navigate(['/agregarpeli']);
  }

  validar():boolean{
    this.errornombre=false;
    this.erroravatar=false;
    let estado = true;

    if (this.usuario.nombre.trim() === '') {
      this.errornombre = true;
      estado = false;
    }
    if (this.usuario.avatar.trim() === '') {
      this.erroravatar = true;
      estado = false;
    }
    return estado;
  }

  eliperf(){
    const dialogRef = this.dialog.open(BorrarperfilComponent, {
      data: {name: 'Eliminación de cuenta', usuario: this.usuario},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result ===true) {
        this.salir();
      }
    });
  }
  addus(){
    this.router.navigate(['/agregarusuario']);
  }
}
