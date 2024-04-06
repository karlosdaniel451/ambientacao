import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../model/pessoa";

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.scss']
})
export class CriarPessoaComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
