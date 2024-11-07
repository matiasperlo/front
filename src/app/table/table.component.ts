import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule]
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginatorUp!: MatPaginator;
  // @ViewChild(MatPaginator) paginatorDown!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource = new TableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'correo', 'rol', 'fechaContratacion', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    // TODO: Modificarlo para que comparta el uso de dos paginadores
    this.dataSource.paginator = this.paginatorUp;
    this.table.dataSource = this.dataSource;
  }
}
