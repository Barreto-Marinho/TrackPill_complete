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
  public cerrar_nombre:string="Cerrar sesion";
  public modifi_nombre:string="Modificar datos";
  public isDisabled: boolean=true;
  public isDis :boolean=false;
  public place_check:boolean=false;
  public n_place_check:boolean=false;
  public place_nombre:string;
  public place_apellido:string;
  public place_anio:string;
  public place_dia:string;
  public place_mes:string;
  public place_mes_Str:string;
  public chequeador:string="checked";
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.inicializar();
  }

  inicializar(){
    if(this.authSvc.datos$ != undefined){
      this.reestablacer_datos();  
    }
    this.isDisabled=true;
    this.isDis=false;
    this.cerrar_nombre="Cerrar sesion";
    this.modifi_nombre="Modificar datos";
  }

  reestablacer_datos(){
    this.place_nombre= this.authSvc.datos$.nombre;
    this.place_apellido=this.authSvc.datos$.apellido;
    this.place_anio= this.authSvc.datos$.anio;
    this.place_mes= this.authSvc.datos$.mes;
    this.place_dia= this.authSvc.datos$.dia;
    if(this.authSvc.datos$.genero=="masculino"){
      this.place_check=true;
      this.n_place_check=false;
    }else{
      this.place_check=false;
      this.n_place_check=true;
    }
    switch(this.place_mes) { 
      case "01": { 
        this.place_mes_Str="Enero"
         break; 
      } 
      case "02": { 
        this.place_mes_Str="Febrero"
         break; 
      } 
      case "03": { 
        this.place_mes_Str="Marzo"
         break; 
      } 
      case "04": { 
        this.place_mes_Str="Abril"
         break; 
      } 
      case "05": { 
        this.place_mes_Str="Mayo"
         break; 
      } 
      case "06": { 
        this.place_mes_Str="Junio"
         break; 
      } 
      case "07": { 
        this.place_mes_Str="Julio"
         break; 
      } 
      case "08": { 
        this.place_mes_Str="Agosto"
         break; 
      } 
      case "09": { 
        this.place_mes_Str="Septiembre"
         break; 
      } 
      case "10": { 
        this.place_mes_Str="Octubre"
         break; 
      } 
      case "11": { 
        this.place_mes_Str="Noviembre"
         break; 
      } 
      case "12": { 
        this.place_mes_Str="Diciembre"
         break; 
      } 
      default: { 
        this.place_mes_Str="Oliwis"
         break; 
      } 
   }
  }

  Modificar_datos(){
    if(this.isDisabled==true){
      this.modifi_nombre= "Cancelar";
      this.cerrar_nombre= "Guardar";
    }else{
      this.modifi_nombre= "Modificar datos";
      this.cerrar_nombre= "Cerrar sesion";
    }
    this.isDisabled = !this.isDisabled;
    this.isDis= !this.isDis;
  }
  male_boton(){
    this.gen = "masculino";
  };
  female_boton(){
    this.gen = "femenino";
  }

  Cerrar_sesion(nombre, apellido, anio,mes,dia){
    var name = nombre.value;
    var Sname = apellido.value;
    if(this.cerrar_nombre== "Guardar"){
      if(name = ""){
        name = this.authSvc.datos$.nombre;
      }
      if(Sname = ""){
        Sname = this.authSvc.datos$.apellido;
      }
      this.authSvc.modificar_datos(this.authSvc.usuario$,name,Sname,anio.value,mes.value,dia.value, this.gen) 
      this.authSvc.actualizar_datos();
      this.inicializar();
    }else{
      this.authSvc.logout();
      this.router.navigate(['/cuenta']);
    }
  }

}
