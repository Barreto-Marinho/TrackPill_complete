import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('nombre') inputname;
  @ViewChild('apellido') inputapellido;
  @ViewChild('email') inputemail;
  @ViewChild('password') inputpassword;
  @ViewChild('verify_password') inputverify_password;

  constructor(private authSvc:AuthService, private router:Router,
              private alertController: AlertController){ }

  ngOnInit() {
  }


/*****************************************************************************************************  
  La funcion ionViewWillEnter se ejecuta cuando se imprima la pagina actual, con se puede inicializar
  las variables de la pagina
******************************************************************************************************/ 
  ionViewWillEnter(){
    this.inputname.value='';
    this.inputapellido.value='';
    this.inputemail.value='';
    this.inputpassword.value='';
    this.inputverify_password.value='';
    this.var = "male";
  }


/*****************************************************************************************************  
 La funcion male_boton() ejecuta cambia el valor de la funcion var a masculino
******************************************************************************************************/  
  male_boton(){
    this.var = "masculino";
  };

/*****************************************************************************************************  
 La funcion female_boton() ejecuta cambia el valor de la funcion var a masculino
******************************************************************************************************/  
  female_boton(){
    this.var = "femenino";
  }

/*****************************************************************************************************  
 La funcion onRegister recibe los valores de email, password, nombre, apellido, dia, ani, 
 verify_password, en esta funcion se verifica que todos los campos esten completados, que la 
 contraseña tenga los minimos necesarios en su composicion, que el correo no haya sido registrado
 anteriormente. Si se cumplen estas condiciones, se realiza el cambio a la pagina de verificacion.
******************************************************************************************************/  
  async onRegister(email, password,nombre,apellido, dia, mes, anio,verify_password):Promise<void>{
    try{
      if((nombre.value!="")&&(email.value!="")&&(password.value!="")&&(apellido.value!="")&&(dia.value!="")&&(mes.value!="")&&(anio.value!="")&&(verify_password.value!="")&&(this.var!="male")){
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
      }else{
        this.Imprimir_error("Revise que todos los campos se llenaran correctamente ")
      }
    }
    catch(error){console.log('Error',error)} 
  }

/*****************************************************************************************************  
La funcion verificar_contra() recibe la contraseña ingresada y verifica todas las condiciones a cumplir.
******************************************************************************************************/  
  verificar_contra(password){
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
          if((asci>=48)&&(asci<=57)){
            requisitos[2]=1;//num
          }
        }
      }
    }
    if(password.length<6){
      this.Imprimir_error("La contraseña debe tener al menos 6 caracteres")
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
La funcion Imprimir_error() imprime las condiciones de las contraseñas para que el usuario se entere
******************************************************************************************************/ 
  async Imprimir_ayuda(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
  
      subHeader: "La contraseña debe tener al menos 6 caracteres,1 número, una mayuscula y una miniscula",
      //message: texto,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
