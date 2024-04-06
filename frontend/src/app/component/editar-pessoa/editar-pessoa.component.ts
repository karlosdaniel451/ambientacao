import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {PessoaService} from "../../service/pessoa.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent implements OnInit {
  pessoa: Pessoa = {
    id: 0,
    nome: '',
    cpf: '',
  }

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.pessoaService.readById(id).subscribe(pessoa => {
        this.pessoa = pessoa
        console.log(this.pessoa)
      })
    }
  }

  atualizarPessoa() {
    this.pessoaService.update(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Pessoa atualizada com sucesso!')
      this.router.navigate([''])
    })
  }
}
