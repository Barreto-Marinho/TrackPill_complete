import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  @ViewChild('email') inputemail;
  @ViewChild('password') inputpassword;
  
  constructor(private authSvc:AuthService, private router:Router,
              private alertController: AlertController,
              public toastController: ToastController){ }

  ngOnInit() {
  }

/*****************************************************************************************************  
  La funcion ionViewWillEnter se ejecuta cuando se imprima la pagina actual, con se puede inicializar
  las variables de la pagina
******************************************************************************************************/ 
  ionViewWillEnter(){
      this.inputemail.value='';
      this.inputpassword.value='';
  }

/*****************************************************************************************************  
La funcion onLogin() logea al usuario en firebase, y redirige al usuario ala pagina principal mientras
que el usuario ya haya verificado la cuenta, de lo contrario mandara la alerta de que el correo no esta
verificado, en caso de tener mal la contraseña o el correo este lo indicara, y mostrara un toast si 
la sesion se inicio correctamente.
******************************************************************************************************/
  async onLogin(email,password){
    try{
      const user= await  this.authSvc.login(email.value,password.value);
      console.log("Verificando...")
      if(user){
        const estaverificado = this.authSvc.isEmailVerify(user)
        console.log('verificado->',estaverificado)
         this.redigirir_usua(estaverificado);
      }else{
        this.Imprimir_error("Revise su datos: Contraseña y Correo no coinciden")
      }
    }
    catch(error){console.log('Error->',error)} 
  }

/*****************************************************************************************************  
En la funcion de redirigir_usua(),  se redirigira a la pagina principal, y se mostrara el toast 
indicando que ya se ha iniciado la sesion, si no esta el correo verificado, manda la alerta. 
******************************************************************************************************/
  redigirir_usua(estaverificado: boolean){
      // si el usuario esta bien, redigir a admin, sino dice que verificar
    if(estaverificado){
      this.router.navigate(['/folder/ ']);
      this.presentToast();
    }else{
      this.authSvc.usuario$=undefined;
      this.authSvc.logout();
      this.Imprimir_error("El correo aun no esta verificado")
    }
  }

/*****************************************************************************************************  
La funcion Imprimir_error() recibe un string de texto, y lo imprime en una ventana de alert en el 
celular
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
La funcion presentToast es una funcion que recibe una variable texto, y la muestra en la pantalla
durante unos pocos segundos.
******************************************************************************************************/
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Sesion iniciada',
    duration: 2000
  });
  toast.present();
}

}
