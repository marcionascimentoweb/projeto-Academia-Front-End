import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/model/Aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit {

  public formulario! : FormGroup;
  public aluno : Aluno | undefined;
  public alunos : Aluno[] |undefined;

  constructor(
    private alunoService : AlunoService,
    private formBuilder : FormBuilder,
    private _route : Router ) { 
      this.aluno = new Aluno();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idAluno : ['', [Validators.required]],
      nome : ['', Validators.required],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      estadoCivil: ['', Validators.required]
    });
  }

  cadastrar(){
    this.alunoService.postAlunos(this.formulario.value).subscribe(data =>{
      this.aluno = new Aluno();
      alert('Preenchido com sucesso!');
      this.voltar();
    })
  }

  voltar(){
    this._route.navigate(['alunos']);
  }

}
