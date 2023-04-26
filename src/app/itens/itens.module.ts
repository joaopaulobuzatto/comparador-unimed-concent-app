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
import { ComparaConcentComponent } from './components/compara-concent/compara-concent.component';
import { ComparaNetrisComponent } from './components/compara-netris/compara-netris.component';


@NgModule({
  declarations: [
    ItensComponent,
    ItemFormComponent,
    ItensUnimedListComponent,
    ItensConcentListComponent,
    ComparaConcentComponent,
    ComparaNetrisComponent
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
