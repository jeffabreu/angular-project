import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLancamentosComponent } from './table-lancamentos.component';

describe('TableLancamentosComponent', () => {
  let component: TableLancamentosComponent;
  let fixture: ComponentFixture<TableLancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableLancamentosComponent]
    });
    fixture = TestBed.createComponent(TableLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
