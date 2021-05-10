import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-compart1',
  templateUrl: './compart1.page.html',
  styleUrls: ['./compart1.page.scss'],
})
export class Compart1Page implements OnInit {

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  funcion(){
    this.authSvc.envio_dato_thing_speak('23');
  }

  funcion_2(){
    this.authSvc.leer_dato_thing_speak();
  }

}
