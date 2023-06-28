import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-lancamentos',
  templateUrl: './table-lancamentos.component.html',
  styleUrls: ['./table-lancamentos.component.css']
})
export class TableLancamentosComponent {
 @Input() lancamentos : any = []
}
