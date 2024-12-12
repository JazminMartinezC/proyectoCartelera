import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgregarpeliComponent } from './agregarpeli/agregarpeli.component';
import { EditarperfComponent } from './editarperf/editarperf.component';
import { AgregarperfilComponent } from './agregarperfil/agregarperfil.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'editarperf', component: EditarperfComponent},
    {path: 'agregarpeli', component: AgregarpeliComponent},
    {path: 'agregarusuario', component: AgregarperfilComponent},
    {path: '', redirectTo: 'login',pathMatch: 'full'}
];
