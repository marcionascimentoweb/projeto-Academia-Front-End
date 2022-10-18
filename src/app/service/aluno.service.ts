import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../model/Aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url = "http://localhost:8080/alunos";
  private urlId = "http://localhost:8080/alunos/id";
  

  //Headers
  HttpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //Listar Alunos
  getAlunos() : Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url);
  }

  //Lista Aluno
  getAluno(idAluno : number): Observable<Aluno>{
    const _url = `${this.url}/${idAluno}`;
    return this.http.get<Aluno>(_url);
  }

  //Cadastrar Alunos
  postAlunos(aluno : Aluno) : Observable<Aluno>{
    return this.http.post<Aluno>(this.url, aluno);
  }

  //Deletar Alunos
  deleteAlunos(idAluno: number) : Observable<Aluno>{
    const _url = `${this.url}/${idAluno}`;
    return this.http.delete<Aluno>(_url);
  }

  //Editar Alunos
  editarAlunos(idAluno: number, request: Aluno) : Observable<Aluno>{
    const _url = `${this.url}/${idAluno}`;
    return this.http.put<Aluno>(_url, request);
  }

}
