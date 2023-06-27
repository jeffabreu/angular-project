import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
  
})
export class LancamentoCadastroComponent {
 date : Date = new Date()
 tipo: any[] = [
  {label: 'Receita', value: '0'},
  {label: 'Despesa', value: '1'}
 ]
 categorias: { label: string, value: number }[] = [
  { label: 'Alimentação', value: 1 },
  { label: 'Luz', value: 2 },
  { label: 'Água', value: 3 },
  { label: 'Internet', value: 4 },
  { label: 'Transporte', value: 5 },
  // Adicione mais despesas conforme necessário
  ];
  pessoas: { label: string, value: number }[] = [
    { label: 'João da Silva', value: 1 },
    { label: 'Maria Souza', value: 2 },
    { label: 'Pedro Almeida', value: 3 },
    { label: 'Ana Santos', value: 4 },
    { label: 'Carlos Oliveira', value: 5 },
    // Adicione mais pessoas conforme necessário
  ];
  
 
}
