import { Component, OnInit } from '@angular/core'; // se importan las librerias 
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-olvido-contra',
  templateUrl: './olvido-contra.page.html',
  styleUrls: ['./olvido-contra.page.scss'],
})
export class OlvidoContraPage implements OnInit {

  constructor(private authSvc:AuthService, private router: Router,
    private alertController: AlertController){ }

  ngOnInit() {
  }
/*****************************************************************************************************  
La funcion Recuperar hace uso de la funcion resetpassword presente en el auth services, para que 
al correo ingraso en email, se reenvie un correo para recuperar la contraseña en caso de olvidarla
******************************************************************************************************/
  async Recuperar(email){
    try{
       await this.authSvc.resetPassword(email.value);
    }
    catch(error){console.log('Error->',error)} 
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


  }


