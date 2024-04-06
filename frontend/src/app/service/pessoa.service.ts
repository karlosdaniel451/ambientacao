import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../model/pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  baseUrl: string = '/api/pessoas';

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    alert(msg)
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  read(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}`)
  }
}
