import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/model/Aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-alunos-deletar',
  templateUrl: './alunos-deletar.component.html',
  styleUrls: ['./alunos-deletar.component.css']
})
export class AlunosDeletarComponent implements OnInit {

  
  id! : number ;
  aluno : Aluno | undefined;

  constructor(
    private alunoService : AlunoService,
    private route: ActivatedRoute,
    private _route : Router,
     
    ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAluno'];
    this.alunoService.getAluno(this.id).subscribe(res => {
      this.aluno = res;
      console.log(this.aluno);
      console.log(`este será removido ${this.aluno.nome}`);
    })
  }

  deletar(){
    this.alunoService.deleteAlunos(this.id).subscribe(res =>{
      alert('Removido com sucesso');
      this.voltar();
    })
  }

  voltar(){
    this._route.navigate(['alunos']);
  }

}
