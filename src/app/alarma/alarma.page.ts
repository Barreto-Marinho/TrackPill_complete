import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.page.html',
  styleUrls: ['./alarma.page.scss'],
})
export class AlarmaPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  public place_temperatura:string;
  public place_humedad:string;
  public puntos_temp =[] ;
  public puntos_humedad =[] ;
  public fecha_Vec =[] ;
  public nombre_boton:String;
  public estado:String;

  lineChart:any;
  constructor(private authSvc:AuthService, private router:Router,
    private alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

async ionViewWillEnter(){
    Chart.register(...registerables);
    await this.authSvc.leer_dato_thing_speak();
    await this.authSvc.leer_temp_hum_thinkspeak();
    const datos=  this.authSvc.datos_t_h.split("/");
    this.place_temperatura= datos[7] + "°C";
    this.place_humedad= datos[9] +"%";
    if((Number(datos[7])>Number(this.authSvc.compar1$.temp_max))|| (Number(datos[9])>Number(this.authSvc.compar1$.hum_max))){
        this.estado = "Peligro"
    }else{
        this.estado = "Normal"
    }
    this.nombre_boton= "Cambiar a Humedad"
    this.puntos()
    console.log(this.puntos_temp)
    if(this.lineChart != undefined){
        this.lineChart.destroy();
    }
    this.lineChartMethod();
}

public Boton(){
  this.lineChart.destroy();
  if(this.nombre_boton== "Cambiar a Humedad"){
    this.nombre_boton= "Cambiar a Temperatura"
    this.lineChartMethod_v();
  }else{
    this.nombre_boton= "Cambiar a Humedad"
    this.lineChartMethod();
  }
}

public puntos(){
  this.puntos_temp = [];
  this.puntos_humedad = [];
  this.fecha_Vec = []
  console.log(this.authSvc.datos_seg)
  for(var i = 20; i<30; i++){
    this.puntos_temp.push((1/3)*(Number(this.authSvc.datos_seg[i]["field7"])));
    this.puntos_humedad.push((1/3)*(Number(this.authSvc.datos_seg[i]["field8"])));
    const fechas = String(this.func_fecha(i)).split(" ")
    const dia =fechas[2];
    const mes = fechas[1]; 
    this.fecha_Vec.push(dia + " de "+mes)
  }
  this.fecha_Vec = this.fecha_Vec.reverse();
}

public sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

public func_fecha(pos){
  var d = new Date();
  return(this.sumarDias(d, -pos));
}




lineChartMethod_v(){
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
      labels:  this.fecha_Vec,
      datasets: [
        {
          label: 'Minutos sobrepasando humedad max',
          fill: false,
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#000000',
          pointBackgroundColor: '#000000',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#000000',
          pointHoverBorderColor: '#000000',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 30,
          data: this.puntos_humedad,
          spanGaps: false,
        }
      ]
    }
  });
}

lineChartMethod(){
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
      labels:  this.fecha_Vec,
      datasets: [
        {
          label: 'Minutos sobrepasando temperatura max',
          fill: false,
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#000000',
          pointBackgroundColor: '#000000',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#000000',
          pointHoverBorderColor: '#000000',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 30,
          data: this.puntos_temp,
          spanGaps: false,
        }
      ]
    }
  });
}



}
