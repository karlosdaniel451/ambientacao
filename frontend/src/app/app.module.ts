import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CriarPessoaComponent } from './component/criar-pessoa/criar-pessoa.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListarPessoaComponent } from './component/listar-pessoa/listar-pessoa.component';

@NgModule({
  declarations: [AppComponent, CriarPessoaComponent, ListarPessoaComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, MatCardModule, MatButtonModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
