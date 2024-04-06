import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  baseUrl: string = '/api/pessoas';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  read(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}`);
  }

  delete(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this.baseUrl}/${id}`);
  }

  readById(id: string | number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.baseUrl}/${pessoa.id}`, pessoa);
  }

  readByNome(value: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?nome=${value}`);
  }
}
