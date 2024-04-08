import {Component, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PessoaService} from "../../service/pessoa.service";

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas = new MatTableDataSource<Pessoa>();
  displayedColumns: Iterable<string> = ['nome', 'cpf', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  totalItems = 0;
  pageSize = 10;
  currentPage = 0;
  termoBusca: any;
  existePessoa: boolean = false;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    // @ts-ignore
    this.pessoas.paginator = this.paginator;

    this.pessoaService.read(this.currentPage).subscribe((pessoas) => {
      this.pessoas.data = pessoas.content;
      this.totalItems = pessoas.totalElements;
      this.pageSize = pessoas.size;
      this.existePessoa = this.existesPessoas(this.totalItems);
    });
  }

  pageChanged($event: PageEvent) {
    this.currentPage = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.pessoaService.read(this.currentPage).subscribe((pessoas) => {
      this.pessoas.data = pessoas.content;
    });
  }

  excluirPessoa(id: number) {
    if (!confirm('Deseja excluir o usuário?')) {
      return;
    }

    this.pessoaService.delete(id).subscribe(() => {
      this.pessoaService.showMessage('Pessoa excluída com sucesso!');
      this.pessoaService.read(this.currentPage).subscribe((pessoas) => {
        this.pessoas.data = pessoas.content;
        this.totalItems = pessoas.totalElements;
        this.pageSize = pessoas.size;
        this.existePessoa = this.existesPessoas(this.totalItems);
      });
    });
  }

  buscarPessoas() {
    console.log(this.termoBusca);
    this.pessoaService.readByNome(this.termoBusca).subscribe((pessoas) => {
      console.log(pessoas.content);
      this.pessoas.data = pessoas.content;
      this.totalItems = pessoas.totalElements;
      this.pageSize = pessoas.size;
      this.existePessoa = this.existesPessoas(this.totalItems);
    });
  }
  existesPessoas(totalItens: number): boolean {
    return totalItens > 0;
  }
}
