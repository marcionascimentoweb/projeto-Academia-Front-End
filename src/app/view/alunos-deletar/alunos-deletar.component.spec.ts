import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDeletarComponent } from './alunos-deletar.component';

describe('AlunosDeletarComponent', () => {
  let component: AlunosDeletarComponent;
  let fixture: ComponentFixture<AlunosDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
