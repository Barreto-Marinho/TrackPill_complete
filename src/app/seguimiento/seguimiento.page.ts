import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {
  public dias = "Lunes"
  public cont_dia= 1
  constructor(private calendar: Calendar) { }

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




}

