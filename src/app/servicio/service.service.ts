import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  deleteItem(key:string):void{
    localStorage.removeItem(key);
  }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/usuarios');
  }

  getPeliculas(): Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/peliculas');
  }

  getPeliculaId(id:string): Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/peliculas'+"/"+id);
  }

  deletePelicula(id:string):Observable<any>{
    const url=`http://127.0.0.1:8000/api/peliculas/${id}`;
    return this.http.delete(url);
  }

  updatePelicula(id: string, data: any): Observable<any> {
    const url = `http://127.0.0.1:8000/api/peliculas/${id}`;
    return this.http.put(url, data);
  }

  postPelicula(data:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/peliculas',data);
  }

  updateUsuario(id: string, data: any): Observable<any> {
    const url = `http://127.0.0.1:8000/api/usuarios/${id}`;
    return this.http.put(url, data);
  }

  deleteUsuario(id:string):Observable<any>{
    const url=`http://127.0.0.1:8000/api/usuarios/${id}`;
    return this.http.delete(url);
  }

  postUsuario(data:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/usuarios',data);
  }

  buscarPeliculas(nombre: string): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/buscar', {
      params: { nombre },
    });
  }

  peliculasPaginadas(pagina: number, tam: number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/pagina', {
      params: {
        pagina: pagina.toString(),
        tam: tam.toString(),
      },
    });
  }
}

