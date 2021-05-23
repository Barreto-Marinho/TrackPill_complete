import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { IonicMqttModule, MQTTService } from 'ionic-mqtt';

//import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,ComponentsModule,HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthService,QRScanner,StatusBar,
    SplashScreen,],
  bootstrap: [AppComponent],
})
export class AppModule {}
