import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {
  public HoraAlarma:string
  public dias = "Lunes"
  public cont_dia= 1
  public estado = []
  public AlarmaHora=[]
  public datos 
  public espacio = "               +" + "45 minutos"
  public habilitar=false
  public medicamento_v :string
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



  async ionViewWillEnter(){
    await this.authSvc.leer_dato_thing_speak()
    console.log("Ey Hola",this.authSvc.datos_seg)
    this.modificar(29)
    //this.Imprimir_Hora()
}

  public Imprimir_Hora(){
    this.medicamento_v=this.authSvc.compar1$.medicamento;
    var var_string
    if(this.authSvc.compar1$.hora.length>2){
    var_string = this.authSvc.compar1$.hora.split('/');}
    else{var_string = "";}
    this.AlarmaHora= [];
    var i = 0;
    for (i = 0; i<(var_string.length);i++){
      if(var_string[i] != ""){
        var new_fecha= {fecha_ini: var_string[i].charAt(11)+var_string[i].charAt(12)+var_string[i].charAt(13)+var_string[i].charAt(14)+var_string[i].charAt(15)}
        this.AlarmaHora.push(new_fecha);
        this.habilitar = true; 
      }
    }
    console.log(this.AlarmaHora);
   // if(this.dias=="Martes"){
   //  this.habilitar = true;   // Este habilitar seria para imprimir algo si el vector es mayor que 0
   //  this.AlarmaHora.push("hola")}
}


  public modificar(posi){
    var hora=[]
    const vec = this.authSvc.datos_seg[posi-1]
    console.log("aqui dato",vec);
    const var_string = vec['field3'].split('/');
    this.AlarmaHora= [];
      var i = 0;
      for (i = 0; i<(var_string.length);i++){
        if(var_string[i] != ""){
          var new_fecha= var_string[i].charAt(11)+var_string[i].charAt(12)+var_string[i].charAt(13)+var_string[i].charAt(14)+var_string[i].charAt(15)
          hora.push(new_fecha)
        }
      }
    const estado_num= vec['field1'].split('/');
    this.estado=[]
    i=0
    for (i = 0; i<(estado_num.length);i++){
    if(estado_num[i] != ""){
      if(estado_num[i]=="0"){
        var new_estado= "No cumplido"
        this.estado.push(new_estado)}
        if(estado_num[i]=="1"){
          var new_estado="Cumplido"
          this.estado.push(new_estado)
        }
        if(estado_num[i]=="2"){
          var new_estado="Tas Drogo bro"
          this.estado.push(new_estado)
        }
      }
    }     
    for (i = 0; i<(this.estado.length);i++){
      var new_fecha_2= {fecha_ini: hora[i],estados: this.estado[i] }
      this.AlarmaHora.push(new_fecha_2)
    }
    console.log(this.AlarmaHora)
    console.log(this.estado)
    console.log(estado_num)
  }

}
