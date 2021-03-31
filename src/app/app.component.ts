import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public cuenta: string="";
  constructor(private authSvc:AuthService, private router:Router,public afAuth:AngularFireAuth) {}

  

  pag_princ(){
    this.router.navigate(['/folder/  ']);
  }
  Conf_alarm(){
    this.router.navigate(['/alarma']);
  }

  Cuenta(){
    if(this.authSvc.usuario$ != undefined){
      this.router.navigate(['/perfil']);
    }else{
      this.router.navigate(['/cuenta']);
      }
  }

 /* async casos(entrada){
      if(entrada=="1"){
        this.router.navigate(['/folder/  ']);
      }else{
          if(entrada=="2"){
            this.router.navigate(['/alarma']);
        }else{
          this.afAuth.authState.subscribe(chequeo=>{
            if(chequeo != null){
              console.log("Aqui usuario bien")
              this.router.navigate(['/perfil']);
            }else{
              console.log("Aqui usuario mal")
              this.router.navigate(['/cuenta']);
            }

            console.log("respuesta-> ",chequeo)
          })
        }
      }
    }*/
}
