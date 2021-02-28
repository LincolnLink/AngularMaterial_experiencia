import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablePaginatorDataSource, TablePaginatorItem } from './table-paginator-datasource';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.css']
})
export class TablePaginatorComponent implements AfterViewInit, OnInit {


  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  @ViewChild(MatTable) table!: MatTable<TablePaginatorItem>;

  dataSource: TablePaginatorDataSource = new TablePaginatorDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TablePaginatorDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
