import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {
      tipo: "Receita",
      descricao: "Salário",
      dataVencimento: "2023-06-15",
      dataPagamento: "2023-06-15",
      valor: 5000,
      pessoa: "João Medeiros da Costa"
    },
    {
      tipo: "Despesa",
      descricao: "Aluguel",
      dataVencimento: "2023-06-10",
      dataPagamento: null,
      valor: 1000,
      pessoa: "Maria"
    },
    {
      tipo: "Receita",
      descricao: "Venda de produto",
      dataVencimento: "2023-06-20",
      dataPagamento: "2023-06-21",
      valor: 1500,
      pessoa: "Pedro"
    },
    {
      tipo: "Despesa",
      descricao: "Supermercado",
      dataVencimento: "2023-06-08",
      dataPagamento: "2023-06-09",
      valor: 200,
      pessoa: "Ana"
    }
  ]
}
