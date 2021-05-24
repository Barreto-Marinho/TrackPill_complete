import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-acudiente',
  templateUrl: './acudiente.page.html',
  styleUrls: ['./acudiente.page.scss'],
})
export class AcudientePage implements OnInit {

  public place_marca;

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.authSvc.leer_dato_correo();
    this.place_marca= this.authSvc.correo_acudiente;
    console.log(this.place_marca)
  }

   Boton(marca){
     this.authSvc.envio_correo_acudiente(marca.value)
  }


}
