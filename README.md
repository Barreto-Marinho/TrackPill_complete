# Trackpill

## Descripcion del proyecto:

<p align="justify"> El presente repositorio es el codigo de desarrollo de una aplicacion para una solucion en IOT, el proyecto se llama Trackpill en el que
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
para que funcione tanto en android como en IOS, en este caso se esta exportando a android y desde android studios se crea el apk necesario 
para descargar la aplicacion el cual se encuentra en: </p>

- [Locacion de apk](android/app/build/outputs/apk/debug)

## Estado del proyecto:

En cuanto a la aplicacion actualmente cuenta con todas las paginas propuestas ya creadas, con funciones de:
- Login: El usuario puede ingresar a la cuenta, la base de datos que se usa actualmente es firebase.

- <p align="justify"> Registrarse: El usuario puede registrarse junto con todos sus datos, se incluyo la verificacion para que todos los campos esten completos, la constraseña verificada sea la misma que la contraseña, la contraseña tenga al menos 6 caracteres, y que contenga al menos 1 mayuscula,  1 minuscula, y 1 numero. Luego de registrarse se enviara un correo de verificacion para el usuario. </p>

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
<p align="justify"> Para acceder a estos 3 archivos se debe abrir la carpeta de cada “page”, y a allí estarán, de este modo en su editor de código, abra el proyecto y diríjase a una carpeta, por ejemplo _cuenta_ allí encontrará los archivos cuenta.page.html, cuenta.page.scss y cuenta.page.ts, a continuación, se hará breve explicación de la función a grandes rasgos que cada uno de este tipo de archivos hace. </p>

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
<p align="justify"> En este archivo se hace la descripción de estilos de algunos elementos presentes en el archivo .HTML, ya que al utilizar el lenguaje Sass con sintaxis .scss se tiene mua mayor organización de la aplicación, , a continuación, se muestra un fragmento de código en este lenguaje: </p>

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
<p align="justify">  Este archivo presenta la programación de las acciones de la aplicación, es el cerebro de cada página, este archivo se maneja en lenguaje typescript, y nos permite describir las acciones en lenguaje de programación a continuación, se muestra un fragmento de código en este lenguaje: </p>

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

## Variables de medición 

<p align="justify">Para la medicion de las variables se esta utilizando una Raspberry PI 4 en donde se estan leyendo 
los datos de temperatura y humedad con el sensor DHT11, y de distancia con 2 sensores infrarojos, 
estos datos son enviados por la Raspberry utilizando MQTT como protocolo de comunicacion de la 
capa de aplicación, y recibidos por thingspeak, un servidor especializado en aplicaciones para IOT, 
debido a que este servidor se esta trabajando de forma gratuita, se tienen limitaciones a la hora de 
su uso, una de ellas es que los datos deben ser enviados a una data mayor a 15 segundos, de lo contrario
se pierden esos datos.</p>

El servidor de thingspeak esta en la siguiente direccion:

[Thingspeak canal](https://thingspeak.com/channels/1345667)

### Codigo para Raspberry 
<p align="justify">Como ya se menciono los datos se estan enviando cada 15 segundos, adicional a eso los mensajes enviados 
no pueden ser enviados, por lo que para la medida de los sensores infrarrojos, se esta enviando al servidor
un indicativo de que el valor cambio de 0 a 1. En el servidor se tienen 3 campos que reciben los datos mandados 
por la Raspberry, el primer campo recibe la variable de temperatura y de humedad, el segundo los cambios del 
primer sensor infrarrojo, y el tercero los cambios del segundo sensor infrarrojo, los mensajes se estan mandando 
de la siguiente forma:</p>

- Sensor temperatura y humedad:
Debido a que estos 2 datos tienen la misma estampa de tiempo, se leen en el mismo momento, se envian al mismo 
campo, de la siguiente forma:

            /Dia/Mes/Año/Hora/Minuto/Segundo/"T"/(Valor temperatura)/"H"/(Valor humedad)

- Sensores infrarrojos: 
En el caso de los infrarrojos estos son muestreados cada 100ms por lo que no es posible enviar todos los datos 
leidos, lo que se manda es el cambio de 1 a 0, pero igualmente solo se pueden enviar de a 8 cambios por cada 
20 segundos, por lo que si se supera este numero, los datos seran enviados 20 segundos despues de lo que estaba 
presupuestado, para evitar su perdida. Los datos se organizan de la siguiente forma:

           /Identificador/Dia/Mes/Año/Hora/Minuto/Segundo/Milisegundo/E1/Variable/ /Dia...

- El identificador depende del sensor, en este caso se esta usando "1C1D1" para el primer infrarrojo, y "2C1D1"
para el segundo infrarojo, el segundo numero cambiara dependiendo del compartimenro, y el tercero dependiendo del 
dispositivo.
- La variable es el estado al que cambia, por lo que si pasa de 0 a 1, variable sera 1, indicando que despues de ese 
tiempo se tendra el estado en 1 hasta un nuevo cambio.

#### Codigo
[Codigo Raspberry](Codigo_Raspberry/Codigo.py)

### Codigo Thingkspeak

<p align="justify"> Debido a la necesidad de guardar los datos en una base de datos se usa la herramienta perteneciente a MathWorks, Thingspeak, donde como se explico anteriormente los datos se transportan mediante MQTT. A continuación se muestra un ejemplo de como se reciven los datos desde un Script de Matlab alojado en Thingspeak: </p>

```Matlab
readChannelID = 1345667;
readAPIKey = '9J8GYR4CBQ0JXYJK';
data = thingSpeakRead(readChannelID,'Field', 1, 'NumPoints', 30, 'ReadKey', readAPIKey,'OutputFormat','table');
```

<p align="justify"> Como se muestra en el fragmento de codigo anterior, se deben definir el ID del canal en donde se alojan los datos, la llave referente a dicho canal, se usa el comando ThingSpeakRead para leer los datos, en este caso se hace referencia a los presentes en el Field 1 y se leen los ultimos 30 en llegar. Al contar con estos datos se proceden a analizarlos, y graficarlos, a continuación se muestra un gragmento de codigo en donde se realiza dicha acción: </p>

```Matlab
plot(tStamp,hume);
grid on 
xlabel('Tiempo')
ylabel('Humedad(%)')
ylim([min(hume)-1 max(hume)+1])
title('Humedad')
```

En el anterior codigo se usa la estampa de tiempo enviada con los datos, dando como resultado unas graficas como la siguiente: 

<p align="center">
   <img src=Codigo_Trackpill/todas.png>
</p>

#### Scripts para cada variable en Matlab 

- [Script Matlab Humedad ](Codigo_Trackpill/Codigo_humd.m)
- [Script Matlab Temperatura](Codigo_Trackpill/codigo_temp.m)
- [Script Matlab Infrarrojo 1](Codigo_Trackpill/Codigo_infra_1.m)
- [Script Matlab Infrarrojo 2](Codigo_Trackpill/Codigo_infra_2.m)


