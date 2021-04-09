import { Component, OnInit } from '@angular/core'; //se importan todas las librerias necesarias para el codigo
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { datos_usuario } from '../shared/user_interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit { // inicia el codigo para el funcionamiento de la pagina 
  gen: string ="masculino";
  public cerrar_nombre:string="Cerrar sesion"; // se definen algunas variables 
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
    this.inicializar(); // se llama la funcion inicializar 
  }

  inicializar(){
    if(this.authSvc.datos$ != undefined){
      this.reestablacer_datos();  // se llama la funcion reestablcer datos 
    }
    this.isDisabled=true; // si no se cumple la condicion esto ocurrira 
    this.isDis=false;
    this.cerrar_nombre="Cerrar sesion";
    this.modifi_nombre="Modificar datos";
  }

  reestablacer_datos(){ // esta funcion es usada para cambiar los datos si el usario ya esta dentro de su perfil 
    this.place_nombre= this.authSvc.datos$.nombre;
    this.place_apellido=this.authSvc.datos$.apellido;
    this.place_anio= this.authSvc.datos$.anio;
    this.place_mes= this.authSvc.datos$.mes;
    this.place_dia= this.authSvc.datos$.dia;
    if(this.authSvc.datos$.genero=="masculino"){//se definen nuevamente las opciones 
      this.gen="masculino";
      this.place_check=true;
      this.n_place_check=false;
    }else{
      this.gen="femenino";
      this.place_check=false;
      this.n_place_check=true;
    }
    switch(this.place_mes) { 
      case "01": { 
        this.place_mes_Str="Enero" //se definen nuevamente las opciones 
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

  Modificar_datos(){ //esta funcion ocurre si se presiona el boton (Buscar en los comentarios del HTML), se actualizan los nuevos datos escogidos 
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
  male_boton(){ // se definen funciones 
    this.gen = "masculino";
  };
  female_boton(){ // se definen funciones 
    this.gen = "femenino";
  }

  Cerrar_sesion(nombre, apellido, anio,mes,dia){ // esta funcion cierra la sesion del ususariom haciendo uso se las funciones presentes en el autservice
    var name = nombre.value;
    var Sname = apellido.value;
    if(this.cerrar_nombre== "Guardar"){
      if(name == ""){
        name = this.authSvc.datos$.nombre;
      }
      if(Sname == ""){
        Sname = this.authSvc.datos$.apellido;
      }
      console.log("Los datos subidos seran  ",name,Sname,anio.value,mes.value,dia.value, this.gen) // se guardan los datos nuevos y se envian a la base da datos en firebase
      this.authSvc.modificar_datos(this.authSvc.usuario$,name,Sname,anio.value,mes.value,dia.value, this.gen)  
      this.authSvc.actualizar_datos();
      console.log(this.authSvc.datos$)
      this.inicializar();
    }else{
      this.authSvc.logout(); // usa la funcion logout para salir y volver a la aplicacion por defecto
      this.router.navigate(['/cuenta']);
    }
  }

}
