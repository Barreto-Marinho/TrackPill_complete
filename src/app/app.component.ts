import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { User } from './shared/user_interface';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pagina Principal', url: "1", icon: 'analytics' },//'/folder/  '
    { title: 'Alarma estado', url: "2", icon: 'construct' },//'/alarma'
    { title: 'Cuenta', url: "3", icon: 'person' },
  ];

  constructor(private authSvc:AuthService, private router:Router,public afAuth:AngularFireAuth) {}

  async casos(entrada){
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
              console.log("Aqui usuario aml")
              this.router.navigate(['/cuenta']);
            }

            console.log("respuesta-> ",chequeo)
          })
        }
      }
    }
}
