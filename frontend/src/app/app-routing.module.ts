import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CriarPessoaComponent } from './component/criar-pessoa/criar-pessoa.component';
import { ListarPessoaComponent } from './component/listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './component/editar-pessoa/editar-pessoa.component';

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
  },
  {
    path: 'editar-pessoa/:id',
    component: EditarPessoaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
