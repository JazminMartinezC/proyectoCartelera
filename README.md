# Proyecto de Cartelera de películas 
##### Dentro del presente git se puede visualizar un proyecto con relación a la presentación de peliculas. En el proyeco se presenta un diseño dinamico para el usuario. El cual en un inicio tiene una pantalla de login en el cual se piden ciertos datos como son el correo y la contraseña.
Después de ingresar al login este mostrará la pantalla principal en la cual se podrá visualizar 1 dashboard, una barra de menu en la parte superior la cual contiene el nombre del usuario logueado, y la foto de perfil.
En el dashboard se puede notar botones que estan direccionados a hacer ciertas acciones las cuales son Agregar usuario, Editar perfil, Agregar pelicula, los cuales son botones que tienen funcionalidades de servicio directamente con la API que habia sido creada en un inicio.

#### Como inicio en la barra superior se muestran 2 datos las cuales son el nombre y su foto de perfil del usuario que ha sido loggeado. por tanto en el codigo que ve de la siguiente manera. 

![image](https://github.com/user-attachments/assets/de9532a7-e751-4dcb-a950-9a4a8f361711)

##### En donde se hacen consultas a la API por medio de un servicio con el cual obtendremos el nombre y la foto de perfil. Además de mencionar que en la foto de perfil se pueden ver ciertas acciones que puede hacer un usuario las cuales son 
##### * Mi perfil la cual tiene funcionalidad ya que en el typescript se realzia un métodoel cual tiene de nombre mi perfil la cual muestra con un dialog la información del usuario 
![image](https://github.com/user-attachments/assets/85ebec4d-6e87-48ea-a3bc-396d6fae861d)

##### En codigo el dialog se realizo de la siguiete manera.
![image](https://github.com/user-attachments/assets/c1e2006f-ddc3-4a3e-b232-09117e615ac1)

##### * Eliminar perfil la cuales tiene función en el typescript  
![image](https://github.com/user-attachments/assets/bb87fd60-a1d2-4b4e-a315-04143a85bdfc)

##### *En el codigo del dialog de eliminar perfil
![image](https://github.com/user-attachments/assets/1d39834c-31b9-46ee-adc3-e03d67316304)

##### En el codigo muestra que cuando quiera eliminar la cuenta cuenta con 2 botones por tanto tendra que ingresar su contraseña y que este será validado en cuanto este se valide se eliminará.
![image](https://github.com/user-attachments/assets/ac3f3bd8-b947-45ec-929f-b13fb58854e6)

##### * Enseguida esta el boton de cerrar sesión la cual regresará a el login. 
![image](https://github.com/user-attachments/assets/ea90e16d-72f6-4528-9e66-a9d0d36067e7)

### Dashboard

#### En el dashboard se tienen botones los cualesson Editar perfil, Agregar usuario, Agregar peliculas y cerrar sesión.
![image](https://github.com/user-attachments/assets/fd3eaada-16e2-4570-9c81-9937694e8d49)

##### En el botón de Editar perfil se realiza por medio de una pantlla que tiene un formulario en la que se muestran los datos como nombre, foto de perfil, etc. 

![image](https://github.com/user-attachments/assets/a8a040c6-9945-4705-8fd0-8ae98ebae057)

##### Para que pueda hacer un cambio es necesario que tenga un servicio el cual esta iniciado en el typescript 

![image](https://github.com/user-attachments/assets/820ede98-f3ed-43b2-981e-861ffbb39d9f)

##### Asi mismo se contempla que si el usuario quiere cambiar de contrasñe este pueda hacerlo, esto se hace medeinte el uso de un nuevo dialog el cual haga la validación de contraseña anterior y activar una nueva contraseña.
![image](https://github.com/user-attachments/assets/74d73238-f38a-4fab-821d-d6d2c72d4c3a)


#### El boton de Agregar usuario, cuando este de clic lo deireccionara a la pantalla de agregar usuario la cual  en codigo html es:


![image](https://github.com/user-attachments/assets/ae0fc59e-2039-4dc4-9985-e4355bb19761)

###### Una vez recolectado los datos que se agregaran al nuevo usuario en el typescript se guardara mediante un servicio  hacia la api la cual sera el del post 










-------------------------------------------------------------------------------------------------------------------
#### Siendo asi en la pantalla principal se encuentra una tabla que contiene todas las peliculas almacenadas en el a API, además que en en cada una de las peliculas se pueden hacer ciertas acciones las cuales son ver la información, modificar y eliminar la pelicula. por tanto se agregan los siguientes métodos. 

















This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
