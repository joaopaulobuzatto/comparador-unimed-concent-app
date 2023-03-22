import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItensRoutingModule} from './itens-routing.module';
import {ItensComponent} from './containers/itens/itens.component';
import {AppMaterialModule} from '../shared/app-material/app-material.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ItensComponent
  ],
  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ItensModule {
}
