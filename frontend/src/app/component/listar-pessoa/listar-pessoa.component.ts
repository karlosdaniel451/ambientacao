import {Component, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from "../../model/pessoa";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PessoaService} from "../../service/pessoa.service";

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss']
})
export class ListarPessoaComponent implements OnInit {
  pessoas = new MatTableDataSource<Pessoa>();
  displayedColumns: Iterable<string> = ['nome', 'cpf'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  totalItems = 0;
  pageSize = 10;
  currentPage = 0;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.pessoas.paginator = this.paginator;

    this.pessoaService.read(this.currentPage).subscribe(pessoas => {
      this.pessoas.data = pessoas.content;
      this.totalItems = pessoas.totalElements;
      this.pageSize = pessoas.size;
    });
  }

  pageChanged($event: PageEvent) {
    this.currentPage = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.pessoaService.read(this.currentPage).subscribe(pessoas => {
      this.pessoas.data = pessoas.content;
    });
  }
}