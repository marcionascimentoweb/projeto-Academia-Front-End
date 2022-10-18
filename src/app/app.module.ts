import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './view/header/header.component';
import { BannerComponent } from './view/banner/banner.component';
import { FooterComponent } from './view/footer/footer.component';
import { ModalidadesComponent } from './view/modalidades/modalidades.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { PlanosComponent } from './view/planos/planos.component';
import { AlunosComponent } from './view/alunos/alunos.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlunosCadastrarComponent } from './view/alunos-cadastrar/alunos-cadastrar.component';
import { CommonModule } from '@angular/common';
import { AlunosDeletarComponent } from './view/alunos-deletar/alunos-deletar.component';
import { AlunosEditarComponent } from './view/alunos-editar/alunos-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ModalidadesComponent,
    ClientesComponent,
    PlanosComponent,
    AlunosComponent,
    AlunosCadastrarComponent,
    AlunosDeletarComponent,
    AlunosEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
