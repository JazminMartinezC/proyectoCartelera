import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../servicio/service.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorCorreo:boolean =false;
  errorContra:boolean=false;
  estan:boolean=false;
  email:string='';
  passwd:string='';
  usuarios: any[]=[];

  constructor(private servicio:ServiceService,private router:Router){}

  ngOnInit():void{
    this.servicio.getUsers().subscribe(data=>{
      this.usuarios=data;
    })
  }
  
  validar():boolean{
    this.errorCorreo = false;
    this.errorContra = false;
    let estado = true;

    if (this.email.trim() === '') {
      this.errorCorreo = true;
      estado = false;
    }
    if (this.passwd.trim() === '') {
      this.errorContra = true;
      estado = false;
    }
    return estado;
  }

  ingresar(){
    if(this.validar()){
      const usuarioval = this.usuarios.find((user) => user.correo === this.email && user.password=== this.passwd);
    if(usuarioval){
      this.servicio.setItem('usuario',JSON.stringify(usuarioval));
      this.router.navigate(['/home']);
    }else{
      this.estan=true;
    } 
  }
  }

}
