import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent {
  pessoas: { nome: string, city: string, state: string, status: string }[] = [
    { nome: 'João da Silva', city: 'São Paulo', state: 'SP', status: 'ativo' },
    { nome: 'Maria Souza', city: 'Rio de Janeiro', state: 'RJ', status: 'ativo' },
    { nome: 'Pedro Almeida', city: 'Belo Horizonte', state: 'MG', status: 'inativo' },
    { nome: 'Ana Santos', city: 'Salvador', state: 'BA', status: 'ativo' },
    { nome: 'Carlos Oliveira', city: 'Curitiba', state: 'PR', status: 'inativo' },
    // Add more persons as needed
  ];
}
