import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.scss'],
})
export class CriarPessoaComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    cpf: '',
  };

  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit(): void {}

  criarPessoa(): void {
    this.pessoaService
      .create(this.pessoa)
      .pipe(
        catchError(() => {
          this.pessoaService.showMessage(
            `Houve um erro ao criar a pessoa!`,
            true
          );
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.pessoaService.showMessage('Pessoa criada com sucesso!');
        this.router.navigate(['/listar-pessoa']).then((r) => r);
      });
  }
}
