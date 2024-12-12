import { Component, inject, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';

  export interface DialogData {
    usuario: any;
    name: string;
  }

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly pelicula = model(this.data.usuario);

  cerrar(): void {
    this.dialogRef.close();
  }

}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-mi-perfil',
//   imports: [],
//   templateUrl: './mi-perfil.component.html',
//   styleUrl: './mi-perfil.component.css'
// })
// export class MiPerfilComponent {

// }

