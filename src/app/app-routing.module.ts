import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosCadastrarComponent } from './view/alunos-cadastrar/alunos-cadastrar.component';
import { AlunosDeletarComponent } from './view/alunos-deletar/alunos-deletar.component';
import { AlunosEditarComponent } from './view/alunos-editar/alunos-editar.component';
import { AlunosComponent } from './view/alunos/alunos.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { FooterComponent } from './view/footer/footer.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { ModalidadesComponent } from './view/modalidades/modalidades.component';
import { PlanosComponent } from './view/planos/planos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'modalidades', component: ModalidadesComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'planos', component: PlanosComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunosCadastrar', component: AlunosCadastrarComponent},
  {path: 'alunosDeletar/:idAluno', component: AlunosDeletarComponent},
  {path: 'alunosEditar/:idAluno', component: AlunosEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
