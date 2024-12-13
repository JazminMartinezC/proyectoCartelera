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

##### Asi mismo se contempla que si el usuario quiere cambiar de contraseña este pueda hacerlo, esto se hace medeinte el uso de un nuevo dialog el cual haga la validación de contraseña anterior y activar una nueva contraseña.
![image](https://github.com/user-attachments/assets/74d73238-f38a-4fab-821d-d6d2c72d4c3a)


#### El boton de Agregar usuario direcciona a una pantalla en la cual se le piden los datos del nuevo usuario por tanto se ocupa 

![image](https://github.com/user-attachments/assets/91bbf0b7-e570-4229-9ed2-5f51569a3b94)


##### Una vez recolectado los daos estos se validan  se realiza el servicio HTTP de post sobre la tabla de usuarios.
![image](https://github.com/user-attachments/assets/e145428a-48eb-411f-9be7-89df10c136f4)

#### El botón de Agregar peliculas  lo direccionara a una pantalla la cual tiene el contenido para recolectar los datos correspondientes a la pelicula en el codigo html se definio de la sigueinte manera. 

![image](https://github.com/user-attachments/assets/72b76501-27e9-43b0-b656-c7f62b0e0815)


#### Asi mismo para guardar los datos en la base de datos se requiere de hacer un método que valide los datos que se ingresaron y los guarde en la tabla de pelicula, por tanto en el typescript se hace un metodo el cual hace una peticion o un servicio HTTP el cual hace un post sobre peliculas, 

![image](https://github.com/user-attachments/assets/72ef2714-f3dc-425f-b081-5b78038a2e63)


### En la pantalla princippal se muestra una tabla la cual contiene los datos reelevantes sobre las peliculas, por tanto en cada registro se hace una consulta get sobre las peliculas almacenadas en la base. 
![image](https://github.com/user-attachments/assets/8315eb97-2764-4f39-a7e9-83f3de411b0c)


#### En cada uno de los registros se tiene un apartado el cual tiene 3 acciones en especifico 
##### * Boton de ver información

##### Cuando se requiere de información sobre una pelicula al dar clic en la acción aparecera un dialog el cual  contendrá la ifnromaci+ón completa de la película en htmml se ve la sigueitne manera.
![image](https://github.com/user-attachments/assets/766c3941-ef10-465c-9426-294eb6b8b67d)
##### para esto se hace mediante el uso del servicio de obtención de usuario por medio de una ID
![image](https://github.com/user-attachments/assets/d18bd7a9-2e9d-4e67-b1fa-81a165b29387)

##### * Botón de Eliminar la película 
##### Para eliminar una pelicula al dar clic mostrará un dialog el cual moestrara el mensaje de eliminación.

![image](https://github.com/user-attachments/assets/67d3336f-76da-4780-99e8-d06663313fbc)

##### Para cuando ya se requiere de la eliminación de la pelicula se efectua el servicio de delete pelicula. 

![image](https://github.com/user-attachments/assets/2ca16f5f-705e-42a5-ab71-6a3b25e6f9ad)

##### * Botón de Modificar una película 

##### En el caso de modificar o editar una pelicula cuando se de clic en editar mostrará un html el cual contiene la información de la película y el usuario de clic en el boton de  aceptar o cancelar, siendo asi el html es de la siguiente manera. 

![image](https://github.com/user-attachments/assets/ad07a0e5-7a72-40e1-90d6-da1233b8ad75)

##### Para validar cuando se editen campos se realizza un método en el typescript el cual hace un servicio sobre la pelicula siendo que se muestre update sobre la tabla de peliculas.
![image](https://github.com/user-attachments/assets/c62f71c2-972d-48d6-a34d-89324c177f32)





























# Cartelera

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
