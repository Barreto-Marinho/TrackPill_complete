import { Injectable } from '@angular/core';
import { compartimento,datos_usuario, User } from '../shared/user_interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import{switchMap} from "rxjs/Operators";
import { AlertController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { MQTTService } from 'ionic-mqtt';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
  public usuario$: User;
  public datos$: datos_usuario; 
  public compar1$: compartimento; 
  public TOPIC: string[] = [];
  public MQTT_CONFIG: {host: string, port: number,clientId: string} = {
    host: "test.mosquitto.org", port: 8081, clientId: "mqtt"};

  public mqttClient;


  

  constructor(public afAuth:AngularFireAuth, private afs:AngularFirestore, private db: AngularFirestore,private alertController: AlertController
             ,public router: Router,public toastController: ToastController, public http: HttpClient){
    this.user$= this.afAuth.authState.pipe(
      switchMap((user)=> {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )
  }



/*
  public _onConnectionLost(responseObject) {
    // connection listener
    // ...do actions when connection lost
    console.log('_onConnectionLost', responseObject);
  }

  public _onMessageArrived(message) {
    // message listener
    // ...do actions with arriving message
    console.log('message', message);
  }

  public publishMessage() {
    this.mqttClient= this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);
    console.log('publishMessage')
    this.mqttClient.publishMessage("Trackpill","ola");
  }

*/

/*****************************************************************************************************  

La funcion isEmailVerify recibe una variable user y retorna un booleano dependiendo si el resultado es 
verdadero o no, dependiendo si el usuario esta verificado o no

******************************************************************************************************/  
 isEmailVerify(user:User):boolean{
      return(user.emailVerified===true ?true:false);
  }

/*****************************************************************************************************  
La funcion envio_dato_thing_speak 
******************************************************************************************************/ 

async envio_dato_thing_speak(mensaje: string) {
  const apikey= 'DLM8YKW9252LHG6Q';
  var texto = 'https://api.thingspeak.com/update?api_key='+ apikey+ '&field1='+ mensaje;
  await this.http.get(texto).toPromise();
  console.log("Se envio: ", texto)
}
/*****************************************************************************************************  
La funcion envio_dato_thing_speak 
******************************************************************************************************/ 

async envio_info_usuario_thing_speak(Id: string, Npastillas: string, hora: string, hum_max: string, marca: string, medicamento: string, temp_max: string){
  const apikey= 'EUZF1K3JQNR0SPTF';
  const envio:string = apikey+ '&field1='+ Id+'&field2='+ Npastillas+'&field3='+ hora+'&field4='+ hum_max+'&field5='+ marca+'&field6='+ medicamento+'&field7='+ temp_max
  var texto = 'https://api.thingspeak.com/update?api_key='+ envio;
  await this.http.get(texto).toPromise();
  console.log("Se envio: ", texto)
}
/*****************************************************************************************************  
La funcion envio_dato_thing_speak 
******************************************************************************************************/ 

async leer_dato_thing_speak() {
  await this.http.get('https://api.thingspeak.com/channels/1385876/fields/1.json?api_key=57U9PJRJT79HCI4Z&results=2')
        .toPromise()
        .then(res => {
          const leido = res['feeds'];
          const leido_2 = leido[0]['field1'] 
          const leido_3 = leido[1]['field1'] 
          console.log(leido_2)
          console.log(leido_3)
        }
        );
        //.then(res => console.log(res['feeds']));
}
/*****************************************************************************************************  

La funcion resetPassword recibe la variable email de tipo string, esta funcion se encarga de utilizar
una funcion que envia el corro para poder resetear la contraseña, en caso de que el correo no exista,
se lanza una alerta en la pantalla indicando esto.

******************************************************************************************************/  

  async resetPassword(email: string): Promise<void>{
    try{
     await this.afAuth.sendPasswordResetEmail(email);
     this.router.navigate(['/cuenta']);
     this.presentToast("El correo se ha enviado correctamente ");
    }
    catch(error){
      console.log('Error->',error)
      console.log(error.message)
      if(error.message=="There is no user record corresponding to this identifier. The user may have been deleted."){
       this.Imprimir_error("Este usuario no corresponde a nunguna cuenta");
       this.presentToast("El correo no se ha enviado correctamente ");
    } else{
      this.Imprimir_error("El correo no esta escrito correctamente");
      this.presentToast("El correo no se ha enviado correctamente ");}
   }
  } 




/*****************************************************************************************************  

La funcion register recibe en string el email, password, nombre, apellido, dia, mes, anio, y genero
para poder registrar el email con estos datos, se usa la funcion createUserWithEmailAndPassword, el cual 
crea el usuario en firebase, y este le otorga el ID al usuario, adicionalmente a esto, se crea una nueva
carpeta en la coleccion Datos_Usuario con el nombre del ID del usuario creado, y por ultimo se envia el 
correo de verificacion, se retorna usuario para poder saber si este se creo correctamente.

******************************************************************************************************/  
  async register(email:string, password: string,nombre:string, apellido:string,dia:string,mes:string,anio:string,genero:string): Promise<User>{
    try{
      const{user}=await this.afAuth.createUserWithEmailAndPassword(email, password);
      const DatosRef = this.db.collection('Datos_Usuario');
      await DatosRef.doc(user.uid).set({
        nombre: nombre,
        apellido: apellido,
        dia:dia,
        mes:mes,
        anio:anio,
        genero:genero,
      });
      const DatosRef_2 = this.db.collection('Compartimento1');
      await DatosRef_2.doc(user.uid).set({
        marca: " ",
        medicamento:" ",
        Npastilla: " ",
        Ntratamiento: " ",
        temp_max: " ",
        hum_max: " ",
        hora: " ",
      });
      await this.sendVerificationEmail();
      return user;
    }
    catch(error){
      console.log('Error->',error.message)
      //this.Imprimir_error(error.message)
    }
  } 


 /*****************************************************************************************************  
La funcion presentToast es una funcion que recibe una variable texto, y la muestra en la pantalla
durante unos pocos segundos.
******************************************************************************************************/
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

 /*****************************************************************************************************  
La funcion Imprimir_error es una funcion que recibe una variable texto, y la muestra un objeto de tipo
alert en la pantalla.
******************************************************************************************************/
  async Imprimir_error(texto){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',

      subHeader: texto,
      //message: texto,
      buttons: ['OK']
    });

    await alert.present();
}


 /*****************************************************************************************************  

La funcion login se encarga de iniciar la cuenta con firebase, al mismo tiempo extrae los datos de 
la cuenta en las variables de usuario$ y datos_usuario$

******************************************************************************************************/
  async login(email: string ,password:string): Promise<User>{
    try{
      const{user}=await this.afAuth.signInWithEmailAndPassword(email,password)
      this.usuario$ = user;
      this.updateUserData(user);
      this.actualizar_datos();
      return user;
    }
    catch(error){console.log('Error->',error)}
  } 


 /*****************************************************************************************************  

 Esta funcion envia el email de verificacion al correo

******************************************************************************************************/
  async sendVerificationEmail(): Promise<void>{
    try{
      return(await this.afAuth.currentUser).sendEmailVerification();

    }
    catch(error){console.log('Error->',error)}
  } 


 /*****************************************************************************************************  

 La funcion de logout realiza la accion de cerrado de sesion con firebase, y borra las variables de 
 los usuarios anteriores

******************************************************************************************************/
  async logout(): Promise<void>{
    try{
      await this.afAuth.signOut();
      this.usuario$= undefined;
      this.datos$=undefined;
      this.compar1$= undefined;
    }
    catch(error){console.log('Error->',error)}
  } 

 /*****************************************************************************************************  

 La funcion de modificar_datos() actualiza los datos en firebase, la primera variable que recibe es de 
 tipo usuario, y las otras son de tipo string como nombre, anio, mes, dia y  gener, que son las variables
 que se actualizaran

******************************************************************************************************/
  async modificar_datos(user:User,nombre:string, apellido:string, anio:string,mes:string,dia:string,gener:string):Promise<void>{
    try{
      const  datos:datos_usuario={
        nombre: nombre,
        apellido:apellido,
        anio: anio,
        mes: mes,
        genero: gener,
        dia: dia,
      }
      this.datos$= datos;
      const dataRef = this.db.collection('Datos_Usuario').doc(user.uid);
      await dataRef.set({
        nombre: nombre,
        apellido: apellido,
        dia:dia,
        mes:mes,
        anio:anio,
        genero:gener,
      },{merge:true});
    }
    catch(error){console.log('Error->',error)}
  }

   /*****************************************************************************************************  

 La funcion de modificar_compartimento() actualiza los datos en firebase, la primera variable que recibe es de 
 tipo usuario, y las otras son de tipo string como nombre, anio, mes, dia y  gener, que son las variables
 que se actualizaran

******************************************************************************************************/
 modificar_compartimento(user:User,marca:string,medicamento:string,Npastilla:string,Ntratamiento:string,temp_max:string,hum_max:string, hora:string){
  try{
    const  compar1:compartimento={
      marca: marca,
      medicamento:medicamento,
      Npastilla: Npastilla,
      Ntratamiento: Ntratamiento,
      temp_max: temp_max,
      hum_max: hum_max,
      hora: hora
    }
    this.compar1$= compar1;
    const dataRef = this.db.collection('Compartimento1').doc(user.uid);
    dataRef.set({
      marca: marca,
      medicamento:medicamento,
      Npastilla: Npastilla,
      Ntratamiento: Ntratamiento,
      temp_max: temp_max,
      hum_max: hum_max,
      hora: hora,
    },{merge:true});
  }
  catch(error){console.log('Error->',error)}
}

   /*actualizar_datos(){
      const dataRef = this.db.collection('Datos_Usuario').doc(this.usuario$.uid);
      dataRef.snapshotChanges().subscribe( (Snapshot) => {
        const  datos:datos_usuario={
         nombre: Snapshot.data()["nombre"],
         apellido: Snapshot.data()["apellido"],
         anio: Snapshot.data()["anio"],
         mes: Snapshot.data()["mes"],
         genero: Snapshot.data()["genero"],
         dia: Snapshot.data()["dia"],
       }
         console.log("Actualizando...")
         this.datos$= datos;
         });
         console.log("Acabe actualizar")
    }*/


 /*****************************************************************************************************  

 La funcion de actualizar_datos() actualiza los datos en la variable datos$ segun el usuario que se 
 haya iniciado.

******************************************************************************************************/
async actualizar_datos(){
  try{
    const dataRef =await this.db.collection('Datos_Usuario').doc(this.usuario$.uid);
     dataRef.get().subscribe( (Snapshot) => {
       const  datos:datos_usuario={
        nombre: Snapshot.data()["nombre"],
        apellido: Snapshot.data()["apellido"],
        anio: Snapshot.data()["anio"],
        mes: Snapshot.data()["mes"],
        genero: Snapshot.data()["genero"],
        dia: Snapshot.data()["dia"],
      }
        console.log("Actualizando...")
        this.datos$= datos;
        });

      const data_ref_2 =await this.db.collection('Compartimento1').doc(this.usuario$.uid);
      data_ref_2.get().subscribe( (Snapshot) => {
        const  datos_2:compartimento={
          marca: Snapshot.data()["marca"],
          medicamento: Snapshot.data()["medicamento"],
          Npastilla: Snapshot.data()["Npastilla"],
          Ntratamiento: Snapshot.data()["Ntratamiento"],
          temp_max: Snapshot.data()["temp_max"],
          hum_max: Snapshot.data()["hum_max"],
          hora: Snapshot.data()["hora"],
        }
          console.log("Actualizando...")
          this.compar1$= datos_2;
          console.log(this.compar1$)
          });   
        console.log("Acabe actualizar")
      }catch(error){console.log('Error->',error)}
  }


 /*****************************************************************************************************  

 La funcion de updateUserData() actualiza datos de user

******************************************************************************************************/
  async updateUserData(user:User): Promise<void>{
    try{
      const userRef:AngularFirestoreDocument<User>= this.afs.doc(`users/${user.uid}`)
      const data_2:User={
        uid:user.uid,
        email:user.email,
        emailVerified:user.emailVerified,
        displayName: user.displayName,
      };
      const dataRef = this.db.collection('Datos_Usuario').doc(user.uid);

      await dataRef.get().subscribe((Snapshot) => {
      const datos:datos_usuario={
        nombre: Snapshot.data()["nombre"],
        apellido: Snapshot.data()["apellido"],
        anio: Snapshot.data()["anio"],
        mes: Snapshot.data()["mes"],
        genero: Snapshot.data()["genero"],
        dia: Snapshot.data()["dia"],
      }
        this.datos$= datos;
        });
          
      return userRef.set(data_2,{merge:true});
    }
    catch(error){console.log('Error->',error)}
  }

  /*async correo_utilizado(email: string): Promise<boolean>{
    try{
      var terminar = 0;
       this.db.collection('users').snapshotChanges().subscribe(bucle=>{
           bucle.forEach(async ( diferente_user: any)=>{
            var email_rec:string= await diferente_user.payload.doc.data()["email"];
             console.log("email ingresado:",email)
            console.log("email revisado",email_rec)
            if(email==email_rec){
              const cond = false;
              return false;
            }
            console.log("Hace return")
          })
        terminar = 1;
      });
      console.log("ultimo return")
      return true;
    }
    catch(error){console.log('Error->',error)}
  }*/

}
