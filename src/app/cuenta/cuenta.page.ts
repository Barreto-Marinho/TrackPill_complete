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

  ionViewWillEnter(){
      this.inputemail.value='';
      this.inputpassword.value='';
  }

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
 
async Imprimir_ayuda(){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',

    subHeader: "La contraseña debe tener al menos 6 caracteres,1 número, una mayuscula o una miniscula",
    //message: texto,
    buttons: ['OK']
  });

  await alert.present();
}
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Sesion iniciada',
    duration: 2000
  });
  toast.present();
}

}

//Comentario probar 
//otro comentario


//comentario de prueba 