import { Component } from '@angular/core';
import { OnInit, viewChild,ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ServiceService } from '../servicio/service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MiPerfilComponent } from '../acciones/mi-perfil/mi-perfil.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BorrarperfilComponent } from '../borrarperfil/borrarperfil.component';

@Component({
  selector: 'app-agregarperfil',
  imports: [MatTableModule,MatFormFieldModule,
    MatInputModule,MatMenuModule,NgIf,MatSidenavModule , MatButtonModule,MatCardModule,FormsModule],
  templateUrl: './agregarperfil.component.html',
  styleUrl: './agregarperfil.component.css',
  standalone:true
})
export class AgregarperfilComponent {
  constructor(private servicio: ServiceService, private router: Router) {}

  nombre:string='';
  correo:string='';
  contra:string='';
  ccontra:string='';
  avatar:string='';

  errnombre=false;
  errcorreo=false;
  errcontra=false;
  errccontra=false;
  errava=false;
  errdup=false;

  usuario:any=[];
  correos:any[]=[];
  readonly dialog = inject(MatDialog);

  dashboardOpen = true;

  ngOnInit(): void {
    let temporal=this.servicio.getItem('usuario');;
    this.usuario = temporal ? JSON.parse(temporal) : [];
    if (!this.usuario) {
      this.router.navigate(['/login']);
    }
    this.servicio.getUsers().subscribe(data=>{
      this.correos=data;
    })
  }

  miPerfil(){
    const dialogRef = this.dialog.open(MiPerfilComponent, {
      data: {name: 'Información de usuario', usuario: this.usuario},
    });
  }

  cancelar(){
    this.router.navigate(['/home']);
  }

  guardar(){
    if(this.validar()){
      const nuevo={
        nombre: this.nombre,
        correo: this.correo,
        password: this.contra,
        avatar: this.avatar
      }
      this.servicio.postUsuario(nuevo).subscribe((data)=>{
        this.router.navigate(['/home']);
      })
    }

  }

  validar():boolean{
    this.errnombre=false;
    this.errcorreo=false;
    this.errcontra=false;
    this.errccontra=false;
    this.errava=false;
    this.errdup=false;
    let estado = true;

    if (this.nombre.trim() === '') {
      this.errnombre = true;
      estado = false;
    }
    if (this.correo.trim() === '') {
      this.errcorreo = true;
      estado = false;
    }else{
      const cor = this.correos.find((corre) => corre.correo === this.correo);
      if(cor){
        this.errdup=true;
        estado=false;
      }
    }
    if (this.contra.trim() === '') {
      this.errcontra = true;
      estado = false;
    }
    if (this.ccontra.trim() === '') {
      this.errccontra = true;
      estado = false;
    }else if(this.contra!==this.ccontra){
      this.errccontra = true;
      estado = false;
    }
    if (this.avatar.trim() === '') {
      this.errava = true;
      estado = false;
    }
    return estado;
  }

  salir(): void {
    this.servicio.deleteItem('usuario'); // Elimina al usuario del almacenamiento
    this.router.navigate(['/login']); // Redirige al login
  }
  editperf():void{
    this.router.navigate(['/editarperf']);
  }

  home():void{
    this.router.navigate(['/home']);
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
  addpeli():void{
    this.router.navigate(['/agregarpeli']);
  }

  addus(){
    this.router.navigate(['/agregarusuario']);
  }
}
