import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MenulateralComponent} from '../menulateral/menulateral.component'


@NgModule({
  declarations: [MenulateralComponent],
  imports: [
    CommonModule
  ],
  exports: [MenulateralComponent]
})
export class ComponentsModule { }
