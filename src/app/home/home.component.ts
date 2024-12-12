import { Component } from '@angular/core';
import { AfterViewInit, OnInit, viewChild,ChangeDetectionStrategy, inject, signal } from '@angular/core';
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
import { VerComponent } from '../acciones/ver/ver.component';
import { EliminarComponent } from '../acciones/eliminar/eliminar.component';
import { EditarComponent } from '../acciones/editar/editar.component';
import { PageEvent } from '@angular/material/paginator';
import { BorrarperfilComponent } from '../borrarperfil/borrarperfil.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [MatPaginator,MatSort,
    MatTableModule,MatFormFieldModule,
    MatInputModule,MatMenuModule,NgIf,MatSidenavModule , MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit{

  constructor(private userService: ServiceService, private router: Router) {}

  displayedColumns: string[] = ['id','nombre', 'poster','genero', 'acciones'];
  usuario:any=[];
  totalItems: number = 0;
  tam: number = 5;
  actual: number = 0;
  dataSource = new MatTableDataSource<any>([]);

  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);
  readonly dialog = inject(MatDialog);

  dashboardOpen = true;

  ngOnInit(): void {
    let temporal=this.userService.getItem('usuario');;
    this.usuario = temporal ? JSON.parse(temporal) : [];
    if (!this.usuario) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getPeliculas().subscribe((data) => {
        this.dataSource.data = data;
       });
    }
  }

  miPerfil(){
    const dialogRef = this.dialog.open(MiPerfilComponent, {
      data: {name: 'Información de usuario', usuario: this.usuario},
    });
  }

  openVer(item:any):void{
    const dialogRef = this.dialog.open(VerComponent, {
      data: {name: 'Información de la película', id:item.id},
    });
  }

  openEliminar(item:any):void{
    const dialogRef = this.dialog.open(EliminarComponent, {
      data: {name: 'Confirmación', pelicula:item},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result ===true) {
        this.userService.getPeliculas().subscribe((data) => {
          this.dataSource.data = data;
         });
      }
    });
  }

  openEditar(item:any):void{
    const dialogRef=this.dialog.open(EditarComponent,{
      data: {name:'Editar Película',pelicula:item},});

      dialogRef.afterClosed().subscribe(result=>{
        if(result===true){
          this.userService.getPeliculas().subscribe((data)=>{
            this.dataSource.data=data;
          });
        }
      });
  }
  
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator();
    this.dataSource.sort = this.sort();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filtrarapi(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue.trim()==''){
      this.userService.getPeliculas().subscribe((data) => {
        this.dataSource.data = data;
       });
    }else{
      this.userService.buscarPeliculas(filterValue).subscribe((data)=>{
        this.dataSource.data=data;
      });
    }
  }
  salir(): void {
    this.userService.deleteItem('usuario');
    this.router.navigate(['/login']);
  }

  editperf():void{
    this.router.navigate(['/editarperf']);
  }

  addpeli():void{
    this.router.navigate(['/agregarpeli']);
  }

  addus(){
    this.router.navigate(['/agregarusuario']);
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

  cambiarPagina(event: PageEvent) {
    this.actual = event.pageIndex;
    this.tam = event.pageSize;
    this.buscarPeliculas();
  }

  buscarPeliculas() {
    this.userService.peliculasPaginadas(this.actual+1, this.tam).subscribe((response) => {
          //this.dataSource.data = response.data;
          this.totalItems = response.total;
          console.log(response);
        }
      );
  }
}