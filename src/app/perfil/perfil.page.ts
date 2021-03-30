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
  public isDisabled: boolean=true;
  public isDis :boolean=false;
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  Modificar_datos(){
    this.isDisabled = !this.isDisabled;
    this.isDis= !this.isDis; 
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
