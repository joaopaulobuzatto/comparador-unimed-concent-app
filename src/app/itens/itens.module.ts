import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItensRoutingModule} from './itens-routing.module';
import {ItensComponent} from './containers/itens/itens.component';
import {AppMaterialModule} from '../shared/app-material/app-material.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import { ItemFormComponent } from './item-form/item-form.component';
import { ItensUnimedListComponent } from './components/itens-unimed-list/itens-unimed-list.component';
import { ItensConcentListComponent } from './components/itens-concent-list/itens-concent-list.component';


@NgModule({
  declarations: [
    ItensComponent,
    ItemFormComponent,
    ItensUnimedListComponent,
    ItensConcentListComponent
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
