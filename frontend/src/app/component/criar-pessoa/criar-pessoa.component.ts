import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {PessoaService} from "../../service/pessoa.service";

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.scss']
})
export class CriarPessoaComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
  }

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }

  criarPessoa(): void {
    console.log(this.pessoa);
    this.pessoaService.create(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Pessoa criada com sucesso!');
      // verificar json enviado
    });
  }
}
