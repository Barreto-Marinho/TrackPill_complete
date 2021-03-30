import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

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

  async Recuperar(email){
    try{
      const user= await  this.authSvc.isEmailVerify(email.value);
      if(user){
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/cuenta']);
    }else{
      this.Imprimir_error("El correo no esta registrado")
    }
    }
    catch(error){console.log('Error->',error)} 


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

  }


