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

  acerca(){
    this.router.navigate(['/acercade']);
  }

  Cuenta(){
    if(this.authSvc.usuario$ != undefined){
      this.router.navigate(['/perfil']);
    }else{
      this.router.navigate(['/cuenta']);
      }
  }

  Acudiente(){
    if(this.authSvc.usuario$ != undefined){
      this.router.navigate(['/acudiente']);
    }else{
      this.router.navigate(['/acudiente']);//cuenta
      }
  }

}
