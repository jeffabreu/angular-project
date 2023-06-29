import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCadastrocComponent } from './pessoas-cadastroc.component';

describe('PessoasCadastrocComponent', () => {
  let component: PessoasCadastrocComponent;
  let fixture: ComponentFixture<PessoasCadastrocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasCadastrocComponent]
    });
    fixture = TestBed.createComponent(PessoasCadastrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
