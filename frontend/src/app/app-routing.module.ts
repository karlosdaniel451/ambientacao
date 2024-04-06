import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CriarPessoaComponent} from "./component/criar-pessoa/criar-pessoa.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cria-pessoa',
    pathMatch: 'full',
  },
  {
    path: 'cria-pessoa',
    component: CriarPessoaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
