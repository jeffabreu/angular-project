import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent {
  pessoas: { label: string, value: number }[] = [
    { label: 'João da Silva', value: 1 },
    { label: 'Maria Souza', value: 2 },
    { label: 'Pedro Almeida', value: 3 },
    { label: 'Ana Santos', value: 4 },
    { label: 'Carlos Oliveira', value: 5 },
    // Adicione mais pessoas conforme necessário
  ];
}
