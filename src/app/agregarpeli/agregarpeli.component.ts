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
  selector: 'app-agregarpeli',
  imports: [MatTableModule,MatFormFieldModule,
    MatInputModule,MatMenuModule,NgIf,MatSidenavModule , MatButtonModule,MatCardModule,FormsModule],
    standalone:true,
  templateUrl: './agregarpeli.component.html',
  styleUrl: './agregarpeli.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgregarpeliComponent implements OnInit{

  constructor(private userService: ServiceService, private router: Router) {}

  titulo:string='';
  descripcion:string='';
  anio:string='';
  genero:string='';
  poster:string='';

  errtitulo=false;
  errdescripcion=false;
  erranio=false;
  errgenero=false;
  errposter=false;

  usuario:any=[];
  readonly dialog = inject(MatDialog);

  dashboardOpen = true;

  ngOnInit(): void {
    let temporal=this.userService.getItem('usuario');;
    this.usuario = temporal ? JSON.parse(temporal) : [];
    if (!this.usuario) {
      this.router.navigate(['/login']);
    }
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
        nombre: this.titulo,
        descripcion: this.descripcion,
        anio_filmacion: this.anio,
        poster: this.poster,
        genero_principal:this.genero
      }
      this.userService.postPelicula(nuevo).subscribe((data)=>{
        this.router.navigate(['/home']);
      })
    }

  }

  validar():boolean{
    this.errtitulo=false;
    this.erranio=false;
    this.errgenero=false;
    this.errdescripcion=false;
    this.errposter=false;
    let estado = true;

    if (this.titulo.trim() === '') {
      this.errtitulo = true;
      estado = false;
    }
    if (this.anio.trim() === '') {
      this.erranio = true;
      estado = false;
    }
    if (this.genero.trim() === '') {
      this.errgenero = true;
      estado = false;
    }
    if (this.descripcion.trim() === '') {
      this.errdescripcion = true;
      estado = false;
    }
    if (this.poster.trim() === '') {
      this.errposter = true;
      estado = false;
    }
    return estado;
  }

  salir(): void {
    this.userService.deleteItem('usuario'); // Elimina al usuario del almacenamiento
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
  addus(){
    this.router.navigate(['/agregarusuario']);
  }
}
