# Trackpill

## Descripcion del proyecto:

<p align="justify"> El presente repositorio es el codigo de desarrollo de una aplica para una solucion en IOT, el proyecto se llama Trackpill en el que
se propone realizar un pastillero inteligente, este pastillero
interactuará con una aplicación móvil, en donde el usuario tendrá la posibilidad de “ingresar” a cada compartimiento del
pastillero, allí se podrá configurar el tipo de pastilla, nombre, laboratorio creador, horario de ingesta y la cantidad total de
pastillas. Mediante sensores infrarrojos se controlará la cantidad de pastillas en el interior de cada compartimiento y de este
modo el usuario sabrá cuando debe ingresar pastillas nuevamente, además gracias al conocimiento del horario de ingesta se
logrará avisar al usuario en qué momento debe tomar cada pastilla mediante un parlante instalado en el pastillero, y gracias a
un Display 7 segmentos el usuario será capaz de saber la cantidad de pastillas a ingerir por tipo, si la persona debe consumir
más de un tipo de pastilla mediante un LED RGB el usuario sabrá a que compartimiento pertenece el número mostrado por el
Display. Para el análisis del estado de las pastillas TrackPill contará con un sensor de temperatura y otro de humedad, de este
modo se podrá monitorear las condiciones a las que están siendo expuestas las pastillas. El sistema tendrá acceso a una base de
datos en donde se tendrá el tipo de pastilla, el laboratorio que las produce y las condiciones ideales de temperatura y humedad,
ya que el usuario proporcionará el nombre de la pastilla se podrá relacionarse relacionará con una base de datos y de este modo
se podrá comparar las condiciones reales con las ideales para prevenir cualquier problema con pérdida de que se pierda la
efectividad de estas o que se vuelvan sustancias nocivas para la integridad del usuario, de este modo el usuario no debe
preocuparse por proporcionar los datos de cuidado mostrados en los empaques de cada pastilla, si la pastilla está en riesgo se
le notificará al usuario para que tome las medidas correspondientes. La aplicacion para celular, se desarrolla un IONIC el cual es
un framework para el desarrollo de las aplicaciones, una ventaja que tiene dicho framework es que la aplicacion se puede exportar
para que funcione tanto en android como en !OS, en este caso se esta exportando a android y desde android studios se crea el apk necesario 
para descargar la aplicacion el cual se encuentra en: </p>

- [Locacion de apk](android/app/build/outputs/apk/debug)

## Estado del proyecto:

En cuanto a la aplicacion actualmente cuenta con todas las paginas propuestas ya creadas, con funciones de:
- Login: El usuario puede ingresar a la cuenta, la base de datos que se usa actualmente es firebase.
- Registrarse: El usuario puede registrarse junto con todos sus datos, se incluyo la verificacion para que todos los campos esten completos, 
la constraseña verificada sea la misma que la contraseña, la contraseña tenga al menos 6 caracteres, y que contenga al menos 1 mayuscula, 
1 minuscula, y 1 numero. Luego de registrarse se enviara un correo de verificacion para el usuario.
- Verificacion: No se podra acceder a la cuenta a menos que ya se haya verificado el correo. No olvidar revisar en SPAM en el correo.
- Modificacion de datos: El usuario una vez registrado en la pagina de cuenta se mostraran sus datos actuales, estos datos se podran modificar.
- Olvido contraseña: Esta habilitada la opcion de olvido contraseña, el cual mandara al correo la opcion para esto.
- Logout: Esta funcion permitira salirse de la cuenta al usuario.
- Guard: Funcion de Ionic para que no se pueda acceder a ciertas paginas si estar con un usuario activado.

## Explicación códigos 
<p align="justify"> Debido al uso del Framework Angular con ionic, se generan diferentes archivos para el desarrollo del proyecto, pero debido a las necesidades del programador, los archivos que tienen mayor relevancia son aquellos que interfieren directamente en la visualización y funcionamiento de la app, entre ellos encontramos los siguientes: </p>

* _*page.ts*_
* _*page.html*_
* _*page.scss*_
### Archivos relevantes 
<p align="justify"> Para acceder a estos 3 archivos se debe abrir la carpeta de cada “page”, y a allí estarán, de este modo en su editor de código, abra el proyecto y diríjase a una carpeta, por ejemplo _cuenta_ allí encontrará los archivos *cuenta.page.html*, *cuenta.page.scss* y *cuenta.page.ts*, a continuación, se hará breve explicación de la función a grandes rasgos que cada uno de este tipo de archivos hace. </p>

1. _*page.html*_
En este archivo se hace la estructura de las paginas de la aplicación mediante el lenguaje marcado HTML, a continuación, se muestra un fragmento de código en este lenguaje:
```HTML
 <ion-header class="ion-no-border">
  <ion-toolbar class="ion-no-border">
    <ion-buttons slot="start">
     <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Cuenta</ion-title>
  </ion-toolbar>
 </ion-header>
```
2. _*page.scss*_
En este archivo se hace la descripción de estilos de algunos elementos presentes en el archivo .HTML, ya que al utilizar el lenguaje Sass con sintaxis .scss se tiene mua mayor organización de la aplicación, , a continuación, se muestra un fragmento de código en este lenguaje:
```scss
  .Boton_Entrar {
    --background:#75a9f9;
    --background-activated:#9fc2f7;
    --color:#140b0a;
    margin: 0;
    width:85%;
    padding-left: 15%;
    font-size:100% ;
    font-weight: 700;
  }
```
3. _*page.ts*_
Este archivo presenta la programación de las acciones de la aplicación, es el cerebro de cada página, este archivo se maneja en lenguaje typescript, y nos permite describir las acciones en lenguaje de programación a continuación, se muestra un fragmento de código en este lenguaje:
```Typescript
  redigirir_usua(estaverificado: boolean){
    if(estaverificado){
      this.router.navigate(['/folder/ ']);
      this.presentToast();
    }else{
     this.authSvc.usuario$=undefined;
      this.authSvc.logout();
      this.Imprimir_error("El correo aun no esta verificado")
    }
  }
```
## Archivos mas relevantes del proyecto:
### Libreria principal:
- [Libreria principal para control de base de datos](src/app/services/auth.service.ts)

### Pagina principal:
- [Codigo HTML pagina pricipal](src/app/folder/folder.page.html)
- [Codigo SCSS pagina pricipal](src/app/folder/folder.page.scss)

### Pagina login:
- [Codigo HTML pagina login](src/app/cuenta/cuenta.page.html)
- [Codigo SCSS pagina login](src/app/cuenta/cuenta.page.scss)
- [Codigo TS pagina login](src/app/cuenta/cuenta.page.ts)

### Pagina Olvidar contraseña:
- [Codigo HTML pagina Olvidar contraseña](src/app/olvido-contra/olvido-contra.page.html)
- [Codigo SCSS pagina Olvidar contraseña](src/app/olvido-contra/olvido-contra.page.scss)
- [Codigo TS pagina Olvidar contraseña](src/app/olvido-contra/olvido-contra.page.ts)

### Pagina Perfil:
- [Codigo HTML pagina perfil](src/app/perfil/perfil.page.html)
- [Codigo SCSS pagina perfil](src/app/perfil/perfil.page.scss)
- [Codigo TS pagina perfil](src/app/perfil/perfil.page.ts)

### Pagina registrarse:
- [Codigo HTML pagina registrarse](src/app/registrarse/registrarse.page.html)
- [Codigo SCSS pagina registrarse](src/app/registrarse/registrarse.page.scss)
- [Codigo TS pagina registrarse](src/app/registrarse/registrarse.page.ts)
