import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CriarPessoaComponent} from "./component/criar-pessoa/criar-pessoa.component";
import {ListarPessoaComponent} from "./component/listar-pessoa/listar-pessoa.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pessoa',
    pathMatch: 'full',
  },
  {
    path: 'cria-pessoa',
    component: CriarPessoaComponent,
  },
  {
    path: 'listar-pessoa',
    component: ListarPessoaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
