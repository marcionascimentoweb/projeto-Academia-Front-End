import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/model/Aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public aluno : Aluno | undefined;
  public alunos : Aluno[] | undefined;
  public editar: string = 'assets/icons/edit.svg';
  public excluir: string = 'assets/icons/delete.svg';

  constructor( private alunoService : AlunoService, 
    private router : ActivatedRoute,
    private _route : Router) {
  
     }

  ngOnInit(): void {
   this.listarAlunos();
  }

  
  public listarAlunos(){
    this.alunoService.getAlunos().subscribe(data => {
      this.alunos = data;
      console.log(data);
    })
  }

}
