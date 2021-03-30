import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  gen: string ="male";
  variable =<HTMLInputElement> document.getElementById("dob-day");
  public isDisabled: boolean=false;
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  Modificar_datos(){
    if(this.isDisabled==true){
      //document.getElementById("dob-day").disabled = true;
      this.variable.disabled=true;
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
      this.variable.disabled=false;
    }
    console.log("Condicion es->",this.isDisabled)
  }
  male_boton(){
    this.gen = "masculino";
  };
  female_boton(){
    this.gen = "femenino";
  }

  Cerrar_sesion(){
    this.authSvc.logout();
    this.router.navigate(['/cuenta']);
  }

}
