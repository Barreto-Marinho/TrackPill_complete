import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcudientePageRoutingModule } from './acudiente-routing.module';

import { AcudientePage } from './acudiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcudientePageRoutingModule
  ],
  declarations: [AcudientePage]
})
export class AcudientePageModule {}
