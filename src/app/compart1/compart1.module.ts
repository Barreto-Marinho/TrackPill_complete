import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Compart1PageRoutingModule } from './compart1-routing.module';

import { Compart1Page } from './compart1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Compart1PageRoutingModule
  ],
  declarations: [Compart1Page]
})
export class Compart1PageModule {}
