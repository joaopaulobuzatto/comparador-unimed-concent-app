import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItensRoutingModule} from './itens-routing.module';
import { ItensComponent } from './containers/itens/itens.component';


@NgModule({
  declarations: [
    ItensComponent
  ],
  imports: [
    CommonModule,
    ItensRoutingModule
  ]
})
export class ItensModule { }
