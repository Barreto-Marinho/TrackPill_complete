import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {


  
  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onLogin(email,password){
    try{
      const user= await  this.authSvc.login(email.value,password.value);
      if(user){
        const estaverificado = this.authSvc.isEmailVerify(user)
        console.log('verificado->',estaverificado)
        this.redigirir_usua(estaverificado);
      }
    }
    catch(error){console.log('Error->',error)} 
  }

  redigirir_usua(estaverificado: boolean){
      // si el usuario esta bien, redigir a admin, sino dice que verificar
    if(estaverificado){
      this.router.navigate(['/folder/ ']);
    }
  }

}
