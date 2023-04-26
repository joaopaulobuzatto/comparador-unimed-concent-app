import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItensComponent} from './containers/itens/itens.component';
import {ComparaConcentComponent} from "./components/compara-concent/compara-concent.component";
import {ComparaNetrisComponent} from "./components/compara-netris/compara-netris.component";

const routes: Routes = [
  {path: '', component: ItensComponent},
  {path: 'compara-concent', component: ComparaConcentComponent},
  {path: 'compara-netris', component: ComparaNetrisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensRoutingModule {
}
