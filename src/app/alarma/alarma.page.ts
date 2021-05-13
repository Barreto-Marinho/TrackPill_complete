import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.page.html',
  styleUrls: ['./alarma.page.scss'],
})
export class AlarmaPage implements OnInit {
  public place_temperatura:string;
  public place_humedad:string;

  constructor(private authSvc:AuthService, private router:Router,
    private alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.Imprimir_Temperatura();
}

 public Imprimir_Temperatura(){
    this.place_temperatura= "30";
    this.place_humedad= "20";
}





}
