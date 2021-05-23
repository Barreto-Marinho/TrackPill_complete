import { Component, OnInit, Type } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {
  public HoraAlarma:string
  public dias = ""
  public mes = ""
  public anio= ""
  public dia_mes=""
  public de= " de "
  public del= " del "
  public dos_puntos = ": "
  public cont_dia= 1
  public estado = []
  public AlarmaHora=[]
  public datos 
  public espacio = "               " 
  public min_str = " minutos"
  public cond:string = "No cumplido"
  public cond_3:string = "Cumplido"
  public cond_2:string = "Sobremedicado"
  public habilitar=false
  public medicamento_v :string
  public posicion;
  public fecha_datos;
  public pastillas_trata
  public pasti2
  public textoc 
  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  Adelante(){
    if(this.posicion<30){
      this.posicion +=1;
    }
    this.modificar(this.posicion)
    this.fecha_datos= this.func_fecha(this.posicion)
    this.impri_fecha();
  }

  atras(){
    if(this.posicion>1){
      this.posicion -=1;
    }
    this.modificar(this.posicion)
    this.fecha_datos= this.func_fecha(this.posicion)
    this.impri_fecha();
  }

  impri_fecha(){
    const fecha_vec= (String(this.fecha_datos)).split(" ")
    console.log("Fecha_vec: " ,fecha_vec)
    this.anio = fecha_vec[3];
    this.dia_mes = fecha_vec[2];
    switch(fecha_vec[0]) { 
      case "Mon": { 
           this.dias="Lunes"
         break; 
      } 
      case "Tue": { 
          this.dias="Martes"
         break; 
      } 
      case "Wed": { 
        this.dias="Miercoles"
        break; 
      } 
      case "Thu": { 
        this.dias="Jueves" 
        break; 
      }
      case "Fri": { 
        this.dias="Viernes" 
        break; 
      }  
      case "Sat": { 
        this.dias="Sabado" 
        break; 
      }case "Sun": { 
        this.dias="Domingo"
        break; 
    }   
   } 
   switch(fecha_vec[1]) { 
    case "Jan": { 
         this.mes="Enero"
       break; 
    } 
    case "Feb": { 
        this.mes="Febrero"
       break; 
    } 
    case "Mar": { 
      this.mes="Marzo"
      break; 
    } 
    case "Apr": { 
      this.mes="Abril" 
      break; 
    }
    case "May": { 
      this.mes="Mayo" 
      break; 
    }  
    case "Jun": { 
      this.mes="Junio" 
      break; 
    }case "Jul": { 
      this.mes="Julio"
      break; 
    } 
    case "Sep": { 
      this.mes="Septiembre"
      break; 
    } 
    case "Oct": { 
      this.mes="Octubre"
      break; 
    } 
    case "Nov": { 
      this.mes="Noviembre"
      break; 
    } 
    case "Dec": { 
      this.mes="Diciembre"
      break; 
    }   
  } 
}



  async ionViewWillEnter(){
    await this.authSvc.leer_dato_thing_speak()
    this.textoc= "Conteo pastillas: " + this.authSvc.compar1$.medicamento ;
    this.pasti2         =  "En el compartimiento: " + this.authSvc.an_pasti[0]
    this.pastillas_trata=  "Para finalizar tratamiento:  "+ this.authSvc.an_pasti[1]
    this.posicion = 30
    this.fecha_datos= this.func_fecha(this.posicion)
    this.modificar(this.posicion)
    this.impri_fecha();
}


public sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

public func_fecha(pos){
  var d = new Date();
  return(this.sumarDias(d, -(30-pos)));
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
    const desviacion_str= vec['field4'].split('/');
    const conteo_horario = vec['field2'].split('/');
    const Npastillas =  Number(vec['field6'])
    var resta
    var desviacion = []
    var medicacion= []
    var medicacion_2= []
    i=0
    for (i = 0; i<(estado_num.length);i++){
      if(estado_num[i] != ""){
        desviacion.push(desviacion_str[i])
        if(estado_num[i]=="0"){
          var new_estado= "No cumplido"
          this.estado.push(new_estado)
          resta= String(Npastillas- Number(conteo_horario[i]))
          medicacion.push("Faltaron "+ resta)
          medicacion_2.push("Faltan  "+ resta)
        }
        if(estado_num[i]=="1"){
          var new_estado="Cumplido"
          this.estado.push(new_estado)
          medicacion.push("")
          medicacion_2.push("")
        }
        if(estado_num[i]=="2"){
          var new_estado="Sobremedicado"
          this.estado.push(new_estado)
          resta= String(Number(conteo_horario[i])-Npastillas)
          medicacion.push("Excedio "+ resta)
          medicacion_2.push("")
        }
      }
    }   
    console.log(medicacion)  
    for (i = 0; i<(this.estado.length);i++){
      var new_fecha_2= {fecha_ini: hora[i],estados: this.estado[i], desvi: desviacion[i],medicamento: vec['field5'],medicaciones: medicacion[i],medica:medicacion_2[i] }
      this.AlarmaHora.push(new_fecha_2)
    }
    console.log(this.AlarmaHora)
    console.log(this.estado)
    console.log(estado_num)
    console.log(medicacion_2)
  }

}
