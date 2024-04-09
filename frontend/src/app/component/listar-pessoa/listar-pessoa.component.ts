import {Component, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PessoaService} from "../../service/pessoa.service";
import {MatSort, Sort} from "@angular/material/sort";
import {catchError, EMPTY} from "rxjs";

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas: MatTableDataSource<Pessoa> = new MatTableDataSource<Pessoa>();
  displayedColumns: Iterable<string> = ['nome', 'cpf', 'acoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  totalItems = 0;
  pageSize = 10;
  currentPage = 0;
  termoBusca: any;
  existePessoa: boolean = false;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoas.sort = this.sort;
    this.pessoas.paginator = this.paginator;
    this.pegaPessoas();
  }

  pageChanged($event: PageEvent) {
    this.currentPage = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.pessoaService
      .read(this.currentPage)
      .pipe(
        catchError(() => {
          this.pessoaService.showMessage('Erro ao buscar pessoas', true);
          return EMPTY;
        })
      )
      .subscribe((pessoas) => {
        this.pessoas.data = pessoas.content;
        this.sortData(this.sort);
      });
  }

  excluirPessoa(id: number) {
    if (!confirm('Deseja excluir o usuário?')) {
      return;
    }

    this.pessoaService.delete(id).subscribe(() => {
      this.pessoaService.showMessage('Pessoa excluída com sucesso!');
      this.pegaPessoas();
    });
  }

  buscarPessoas() {
    this.pessoaService
      .readByNome(this.termoBusca)
      .pipe(
        catchError(() => {
          this.pessoaService.showMessage('Erro ao buscar pessoas', true);
          return EMPTY;
        })
      )
      .subscribe((pessoas) => {
        this.pessoas.data = pessoas.content as Pessoa[];
        this.totalItems = pessoas.totalElements;
        this.pageSize = pessoas.size;
        this.existePessoa = this.existesPessoas(this.totalItems);
      });
  }
  existesPessoas(totalItens: number): boolean {
    return totalItens > 0;
  }
  pegaPessoas() {
    this.pessoaService
      .read(this.currentPage)
      .pipe(
        catchError(() => {
          this.pessoaService.showMessage('Erro ao buscar pessoas', true);
          return EMPTY;
        })
      )
      .subscribe((pessoas) => {
        this.pessoas.data = pessoas.content as Pessoa[];
        this.totalItems = pessoas.totalElements;
        this.pageSize = pessoas.size;
        this.existePessoa = this.existesPessoas(this.totalItems);
      });
  }

  sortData(sort: Sort) {
    const data = this.pessoas.data.slice();
    if (!sort.active || sort.direction === '') {
      this.pessoas.data = data;
      return;
    }

    this.pessoas.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome':
          return compare(a.nome, b.nome, isAsc);
        case 'cpf':
          return compare(a.cpf, b.cpf, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
