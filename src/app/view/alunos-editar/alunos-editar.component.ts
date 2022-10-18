import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Aluno } from 'src/app/model/Aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-alunos-editar',
  templateUrl: './alunos-editar.component.html',
  styleUrls: ['./alunos-editar.component.css']
})

export class AlunosEditarComponent implements OnInit {

  idAluno! : number;
  request! : Aluno;
  
      
  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router ) {}

  ngOnInit(): void {
    this.idAluno = Number(this.route.snapshot.paramMap.get('idAluno'));
    this.alunoService.getAluno(this.idAluno).subscribe(res => {
      this.request = {
        idAluno : Number(`${res.idAluno}`),
        nome : `${res.nome}`,
        dataNascimento: new Date(`${res.dataNascimento}`),
        sexo: `${res.sexo}`,
        estadoCivil: `${res.estadoCivil}` 
      }
    })
  }
     
  update(){
    this.alunoService.editarAlunos(this.idAluno, this.request).subscribe(
      res => {
        alert('Aluno Atualizado');
      })
  }

  
  voltar(){
    this.router.navigate(['alunos']);
  }

}

    

