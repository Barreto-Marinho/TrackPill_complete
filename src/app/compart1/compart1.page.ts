import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-compart1',
  templateUrl: './compart1.page.html',
  styleUrls: ['./compart1.page.scss'],
})
export class Compart1Page implements OnInit {

  public miVariableHora=[]
  public nombre_boton:string;
  public habilitar=false
  public isDisabled= true
  public place_marca= "Ingrese marca";
  public place_medicamento= "Ingresa medicamento";
  public place_N_pastillas= "Ingresa numero de pastillas";
  public place_pastillas_tra= "Ingresa pastillas tratamiento";
  public place_temperatura_max= "Ingresa temperatura max";
  public place_humedad_max= "Ingresa humedad maxima";

  constructor(private authSvc:AuthService,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.nombre_boton= "Modificar";
    this.habilitar = false;
    this.isDisabled= true;
    this.imprimir_labels();
    console.log(this.authSvc.compar1$)
  }

  public imprimir_labels(){
    if(this.authSvc.compar1$.Npastilla==" "){
      this.place_marca= "Ingrese marca";
      this.place_medicamento= "Ingresa medicamento";
      this.place_N_pastillas= "Ingresa numero de pastillas";
      this.place_pastillas_tra= "Ingresa pastillas tratamiento";
      this.place_temperatura_max= "Ingresa temperatura max";
      this.place_humedad_max= "Ingresa humedad maxima";
      this.miVariableHora= [];
    }else{
      this.place_marca= this.authSvc.compar1$.marca; 
      this.place_medicamento= this.authSvc.compar1$.medicamento;
      this.place_N_pastillas=this.authSvc.compar1$.Npastilla;
      this.place_pastillas_tra= this.authSvc.compar1$.Ntratamiento;
      this.place_temperatura_max= this.authSvc.compar1$.temp_max;
      this.place_humedad_max= this.authSvc.compar1$.hum_max;
      const var_string = this.authSvc.compar1$.hora.split('/');
      this.miVariableHora= [];
      var i = 0;
      for (i = 0; i<(var_string.length);i++){
        if(var_string[i] != ""){
          var new_fecha= {fecha_ini: var_string[i]}
          this.miVariableHora.push(new_fecha)
        }
      }
      console.log(var_string);
    }
  }

  public func_borrar(){
    this.authSvc.modificar_compartimento(this.authSvc.usuario$," "," "," "," "," "," "," ");
    this.authSvc.compar1$.marca= " ";
    this.authSvc.compar1$.medicamento= " ";
    this.authSvc.compar1$.Npastilla= " ";
    this.authSvc.compar1$.Ntratamiento= " ";
    this.authSvc.compar1$.temp_max= " ";
    this.authSvc.compar1$.hum_max= " ";
    this.authSvc.compar1$.hora= " ";
    this.imprimir_labels();
    this.miVariableHora= [];
  }

  agregar_alarma(){
    const new_fecha= {fecha_ini: "2012-12-15T06:00:20.789"}
    this.miVariableHora.push(new_fecha)
    console.log(this.miVariableHora)
  }

  Boton_guardar(marca,medicamento,Npastilla,Ntratamiento,temp_max,hum_max){
    var marca_v:string= marca.value;
    var medicamento_v:string= medicamento.value;
    if(this.nombre_boton== "Modificar"){
      this.nombre_boton= "Guardar";
      this.habilitar = true;
      this.isDisabled= false;
    }else{
      if(this.authSvc.compar1$.hum_max!=" " ||((marca_v!="") && (medicamento_v!="")&&(Npastilla.value!="")&&(Ntratamiento.value!="")&&(temp_max.value!="")&&(hum_max.value!="")&&(this.miVariableHora.length>0))){
        var hora:string="/";
        var i;
        for(i = 0;i<(this.miVariableHora.length);i++){
          hora= hora + this.miVariableHora[i]["fecha_ini"]+"/"
        }
        if((marca_v=="")){
          marca_v=this.authSvc.compar1$.marca;
          marca.value=this.authSvc.compar1$.marca; 
          medicamento_v=this.authSvc.compar1$.medicamento; 
          medicamento.value=this.authSvc.compar1$.medicamento; 
          Npastilla.value=this.authSvc.compar1$.Npastilla; 
          Ntratamiento.value=this.authSvc.compar1$.Ntratamiento; 
          temp_max.value=this.authSvc.compar1$.temp_max; 
          hum_max.value=this.authSvc.compar1$.hum_max; 
        }
        marca_v=marca_v.replace(" " ,"_");
        medicamento_v=medicamento_v.replace(" " ,"_");
        this.authSvc.modificar_compartimento(this.authSvc.usuario$,marca.value,medicamento.value,Npastilla.value,Ntratamiento.value,temp_max.value,hum_max.value,hora);
        this.nombre_boton= "Modificar";
        this.habilitar = false;
        this.isDisabled= true;
        this.authSvc.envio_info_usuario_thing_speak(this.authSvc.usuario$.uid,Npastilla.value, hora, hum_max.value, marca_v,medicamento_v, temp_max.value, Ntratamiento.value)
      }
      else{this.Imprimir_error("Los campos no estan completos")}
    }
  }

/*****************************************************************************************************  
La funcion Imprimir_error() recibe un string de texto, y lo imprime en una ventana de alert en el 
celular
******************************************************************************************************/
async Imprimir_error(texto){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',

    subHeader: texto,
    //message: texto,
    buttons: ['OK']
  });

  await alert.present();
}


  cancelar(){
    this.nombre_boton= "Modificar";
    this.habilitar = false;
    this.isDisabled= true;
  }

}
