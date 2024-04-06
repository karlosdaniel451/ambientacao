import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../model/pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  baseUrl: string = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    alert(msg)
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  read(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseUrl);
  }
}
