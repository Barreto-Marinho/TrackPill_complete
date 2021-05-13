import { Component, OnInit } from '@angular/core';
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
  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.nombre_boton= "Modificar";
    this.habilitar = false;
    this.isDisabled= true;
    console.log(this.authSvc.compar1$)
}

  agregar_alarma(){
    const new_fecha= {fecha_ini: "2012-12-15T06:00:20.789"}
    this.miVariableHora.push(new_fecha)
    console.log(this.miVariableHora)
  }

  Boton_guardar(marca,medicamento,Npastilla,Ntratamiento,temp_max,hum_max){
    if(this.nombre_boton== "Modificar"){
      this.nombre_boton= "Guardar";
      this.habilitar = true;
      this.isDisabled= false;
    }else{
      if((marca.value!="") && (medicamento.value!="")&&(Npastilla.value!="")&&(Ntratamiento.value!="")&&(temp_max.value!="")&&(hum_max.value!="")&&(this.miVariableHora.length>0)){
        var hora:string="/";
        var i;
        for(i = 0;i<(this.miVariableHora.length);i++){
          hora= hora + this.miVariableHora[i]["fecha_ini"]+"/"
        }
        this.authSvc.modificar_compartimento(this.authSvc.usuario$,marca.value,medicamento.value,Npastilla.value,Ntratamiento.value,temp_max.value,hum_max.value,hora);
        this.nombre_boton= "Modificar";
        this.habilitar = false;
        this.isDisabled= true;
      }
    }
  }

  cancelar(){
    this.nombre_boton= "Modificar";
    this.habilitar = false;
    this.isDisabled= true;
  }

}
