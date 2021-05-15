import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {
  public HoraAlarma:string;
  public dias = "Lunes"
  public cont_dia= 1
  public estado  = "Cumplido"
  public AlarmaHora=[]
  public habilitar=false
  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  Adelante(){
    this.cont_dia= this.cont_dia+1;
    if(this.cont_dia>6){
      this.cont_dia=1;
    }
    this.impri_dia()
  }

  atras(){
    this.cont_dia= this.cont_dia-1;
    if(this.cont_dia<1){
      this.cont_dia=7;
    }
    this.impri_dia()
  }

  impri_dia(){
    switch(this.cont_dia) { 
      case 1: { 
           this.dias="Lunes"
         break; 
      } 
      case 2: { 
          this.dias="Martes"
         break; 
      } 
      case 3: { 
        this.dias="Miercoles"
        break; 
      } 
      case 4: { 
        this.dias="Jueves" 
        break; 
      }
      case 5: { 
        this.dias="Viernes" 
        break; 
      }  
      case 6: { 
        this.dias="Sabado" 
        break; 
      }case 7: { 
        this.dias="Domingo"
        break; 
    }   
   } 
  }



  ionViewWillEnter(){
    this.Imprimir_Hora();
}

  public Imprimir_Hora(){
    const var_string = this.authSvc.compar1$.hora.split('/');
    this.AlarmaHora= [];
    var i = 0;
    for (i = 0; i<(var_string.length);i++){
      if(var_string[i] != ""){
        var new_fecha= {fecha_ini: var_string[i]}
        this.AlarmaHora.push(new_fecha);
        this.habilitar = true; 
        console.log(this.AlarmaHora); 
      }
    }
    if(this.AlarmaHora != []){
    this.estado ="Cumplido";
    console.log(this.dias); }
    else{this.habilitar = false;} 
   // if(this.dias=="Martes"){
   //  this.habilitar = true;   // Este habilitar seria para imprimir algo si el vector es mayor que 0
   //  this.AlarmaHora.push("hola")}
}

}
