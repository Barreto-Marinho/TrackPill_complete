import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  var: string ="male";
  constructor(private authSvc:AuthService, private router:Router,
              private alertController: AlertController){ }

  ngOnInit() {
  }

  male_boton(){
    this.var = "masculino";
  };
  female_boton(){
    this.var = "femenino";
  }

  async onRegister(email, password,nombre,apellido, dia, mes, anio,verify_password):Promise<void>{
    try{
      if(this.verificar_contra(password.value)){
        if(verify_password.value==password.value){
          const user= await  this.authSvc.register(email.value,password.value,nombre.value,apellido.value,dia.value,mes.value,anio.value,this.var);
          if(user){
            this.router.navigate(['/verificacion']);
          }else{
            this.Imprimir_error("El correo ya esta siendo usado por otra cuenta")
          }
        }else{
          this.Imprimir_error("Las contraseñas no coinciden")
        }
      }
    }
    catch(error){console.log('Error',error)} 
  }

  verificar_contra(password){
    console.log(password.charCodeAt(0))
    const len = password.length;
    var asci= 0;
    var requisitos=[0,0,0]
    for(var i =0; i<len;i++){
      asci = password.charCodeAt(i);
      if((asci>=65)&&(asci<=90)){
        requisitos[0]=1;//mayus
      }else{
        if((asci>=97)&&(asci<=122)){
          requisitos[1]=1;//minus
        }else{
          if((asci>=97)&&(asci<=122)){
            requisitos[2]=1;//num
          }
        }
      }
    }
    if(password.length<=6){
      this.Imprimir_error("La contraseña debe tener mas de 6 caracteres")
      return(0)
    }else{
      if(requisitos[0]==0){
        this.Imprimir_error("La contraseña debe tener al menos una mayuscula")
        return(0)
      }else{
        if(requisitos[1]==0){
          this.Imprimir_error("La contraseña debe tener al menos una minuscula")
          return(0)
        }else{
          if(requisitos[2]==0){
            this.Imprimir_error("La contraseña debe tener al menos un numero")
            return(0)
          }else{
            return(1)
          }
        }
      }
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

}

