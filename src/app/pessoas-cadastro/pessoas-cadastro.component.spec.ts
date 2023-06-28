import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCadastroComponent } from './pessoas-cadastro.component';

describe('PessoasCadastroComponent', () => {
  let component: PessoasCadastroComponent;
  let fixture: ComponentFixture<PessoasCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasCadastroComponent]
    });
    fixture = TestBed.createComponent(PessoasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
