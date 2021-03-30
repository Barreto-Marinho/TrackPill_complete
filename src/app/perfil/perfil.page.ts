import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { datos_usuario } from '../shared/user_interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  gen: string ="male";
  public isDisabled: boolean=true;
  public isDis :boolean=false;
  public place_nombre:string="";
  public place_apellido:string="";
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.authSvc.datos$ != undefined){
      this.reestablacer_datos();  
    }
  }

  reestablacer_datos(){
    this.place_nombre= this.authSvc.datos$.nombre;
    this.place_apellido=this.authSvc.datos$.apellido;
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
