import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {
  public titulo = "¿Quienes somos?"
  public flag_1  =true
  public flag_2  =true
  public flag_4  =true
  public flag_3  = false
  public pagina = 1
  constructor() {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.titulo = "¿Quienes somos?"
    this.flag_1  =true
    this.flag_2  =true
    this.flag_4  =true
    this.flag_3  =false
    this.pagina= 1
  }

  Avanzar_pag(){
    this.pagina += 1;
    this.imprimir()
  }
  Atrasar_pag(){
    this.pagina -= 1;
    this.imprimir()
  }

  imprimir(){
    switch(this.pagina){
      case 1:
        this.flag_1  =true
        this.flag_2  =true
        this.flag_3  =false
        this.flag_4  =true
        break
      case 2:
        this.flag_1  =false
        this.flag_2  =true
        this.flag_3  =true
        this.flag_4  =true
        this.titulo= "¿Quienes somos?"
        
        break
      case 3: 
        this.titulo= "Solucion en IOT"
        this.flag_1  =true
        this.flag_2  =false
        this.flag_3  =true
        this.flag_4  =true
        break
      case 4: 
        this.titulo= "Diagrama de Bloques tecnico"
        this.flag_1  =true
        this.flag_2  =true
        this.flag_3  =true
        this.flag_4  =false
        break
    }
  }

}
